#! /bin/bash

set -e

echo "before run this script you should pull from upstream to avoid some unnecessary problem"
read -p "Do you want procced?(y/n)" yn
case $yn in
        [yY] ) echo "ok,go on!";
                    break;;
        [nN] ) echo "exiting..."
                    exit;;
        *    ) echo "wrong input";
esac

echo "doing stuff"

cd 

read -p "please enter your currently project directory: " currently_directory
read -p "And now please enter the directory which you want to upload: " upload_directory

cd ~/$upload_directory
sudo rm -rf .vuepress blogs docs package-lock.json README.md yarn.lock package.json

cp -rf ~/$currently_directory/.vuepress ~/$upload_directory
cp -rf ~/$currently_directory/blogs ~/$upload_directory
cp -rf ~/$currently_directory/docs ~/$upload_directory
cp -rf ~/$currently_directory/package-lock.json ~/$upload_directory
cp -rf ~/$currently_directory/README.md ~/$upload_directory
cp -rf ~/$currently_directory/yarn.lock ~/$upload_directory
cp -rf ~/$currently_directory/package.json ~/$upload_directory

echo "All done, please commit and push to upstream by yourself!"