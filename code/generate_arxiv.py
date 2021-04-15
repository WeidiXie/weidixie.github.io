"""
Module to preparing paper for arxiv

Assumes that the main paper file is called main.tex.

NOTE: Easiest way to get main.bbl is to download it from overleaf.
"""
import os
import re
import shutil
import argparse
from pathlib import Path


def parse_deps(log):
    """Parse the latex dependenices from the log file

    Args:
        log (list): the rows of the logfile of dependenices.

    Returns:
        (list): relative paths to each file required for a successful latex compilation.
    """
    core_ext = ["tex", "sty", "cls"]
    resource_ext = ["pdf", "png", "jpg"]
    deps = []
    for row in log:
        if "File:" in row:
            for ext in resource_ext:
                if f".{ext}" in row:
                    deps.append(row.split(" ")[1])

        for ext in core_ext:
            regex = r"\([.]\/(.*?)." + ext
            for match in re.finditer(regex, row):
                groups = match.groups()
                assert len(groups) == 1, "expected single group"
                dep = f"./{groups[0]}.{ext}"
                # handle the special case in which a style file is appended in parentheses
                # e.g. 'math.tex (/usr/local/texlive/2019/texmf-dist/tex/latex/tools/bm',
                if " " in dep:
                    continue
                print(dep)
                deps.append(dep)
    return deps


def generate_deps_log(log_path, main_tex):
    cmd = f"pdflatex -recorder -file-line-error {main_tex} > ${log_path}"
    print(f"If hanging here, run the same following command manually to see errors {cmd}")
    os.system(cmd)
    with open(log_path, "r",  encoding="ISO-8859-1") as f:
        log = f.read().splitlines()
    return log


def main(main_tex, archive_name, purge_logs, include_bbl, hobble_arxiv):
    log_path = "main.log"
    log = generate_deps_log(log_path, main_tex)
    print(f"Generated log file")
    deps = parse_deps(log)
    if Path(archive_name).exists():
        shutil.rmtree(archive_name)
    Path(archive_name).mkdir(exist_ok=True, parents=True)

    for dep in deps:
        dest = Path(archive_name) / dep
        Path(dest).parent.mkdir(exist_ok=True, parents=True)
        shutil.copyfile(dep, str(dest))

    # Handle bbl file separately since its relative path changes
    if include_bbl:
        bbl = "main.bbl"
        src = bbl
        dest = Path(archive_name) / bbl
        shutil.copyfile(str(src), str(dest))

    if hobble_arxiv:
        hobbler = "00README.XXX"
        dest = Path(archive_name) / hobbler
        shutil.copyfile(str(hobbler), str(dest))

    os.system(f"zip -r {archive_name}.zip {archive_name}")

    if purge_logs:
        Path(log_path).unlink()


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--main_tex", default="main.tex")
    parser.add_argument("--purge_logs", action="store_true")
    parser.add_argument("--include_bbl", type=int, default=1)
    parser.add_argument("--hobble_arxiv", type=int, default=0)
    parser.add_argument("--archive_name", default="arxiv-submission")
    args = parser.parse_args()

    main(
        main_tex=args.main_tex,
        purge_logs=args.purge_logs,
        archive_name=args.archive_name,
        include_bbl=args.include_bbl,
        hobble_arxiv=args.hobble_arxiv,
    )

