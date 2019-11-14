FROM archlinux:latest

RUN pacman -Suy --noconfirm
RUN pacman -S base-devel git go rsync nodejs npm --noconfirm

RUN useradd -m non-root
RUN echo "non-root ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

RUN su - non-root -c "mkdir /home/non-root/yay"

RUN git clone https://aur.archlinux.org/yay.git /home/non-root/yay/

RUN su - non-root -c "cd yay && (yes | makepkg -si)"

RUN yay -Ss mongo

RUN su - non-root -c "yay -S mongodb-bin mongodb-tools-bin --noconfirm"

RUN su - non-root -c "mkdir /home/non-root/data"

COPY . /app

CMD bash /app/docker/docker_mongodb_setup.sh
