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

read -p "please enter your currently project directory: " currently_directory
read -p "And now please enter the directory which you want to upload: " upload_directory

sudo rm -rf ~/$upload_directory/.vuepress

sudo cp -rf ~/$currently_directory/* ~/$upload_directory

sudo cp -rf ~/$currently_directory/.vuepress ~/$upload_directory

cd ~/$upload_directory

sudo rm -rf node_modules 

echo "All done, please commit and push to upstream by yourself!"