import os
from setuptools import setup, find_packages

from seed.utils.distutils.build_assets import BuildAssetsCommand

VERSION = '0.1'

with open('README.md', 'r', encoding='utf-8') as fh:
    long_description = fh.read()


def get_requirements(env):
    with open('requirements-{}.txt'.format(env)) as fp:
        return [x.strip() for x in fp.read().split('\n') if not x.startswith('#')]


install_requires = get_requirements('base')


def package_files(directory):
    paths = []
    for (path, directories, filenames) in os.walk(directory):
        for filename in filenames:
            paths.append(os.path.join(path, filename))
    return paths


static_files = package_files(os.path.join('src', 'seed', 'static'))
static_files.extend(package_files(os.path.join('src', 'seed', 'data')))


cmdclass = {
    'build': BuildAssetsCommand
}


setup(
    name="boyaa-seed",
    version=VERSION,
    auther="Boyaa DataCenter",
    auther_email="d@boyaa.com",
    description="seed data report system",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="http://seed.boyaa.com",
    install_requires=install_requires,
    packages=find_packages("src"),
    package_dir={
        "": "src"
    },
    data_files=static_files,
    include_package_data=True,
    entry_points={
        "console_scripts": [
            "seed = seed.runner:main",
        ]
    },
    cmdclass=cmdclass,
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: Mozilla Public License 2.0 (MPL 2.0)",
        "Operating System :: OS Independent",
    ]
)
