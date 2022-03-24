function handleClick() {
    let secondButtons = document.getElementById('second-buttons');
    /* Validação */
    let validacao = secondButtons.children[0].style.transform;

    if(validacao === 'scale(1)') {

        secondButtons.children[0].style.marginBottom = '0';
        secondButtons.children[0].style.transform = 'scale(0)';
        secondButtons.children[0].style.transitionDelay = '.7s';

        secondButtons.children[6].style.margin = '0';
        secondButtons.children[6].style.transform = 'scale(0)';
        secondButtons.children[6].style.transitionDelay = '.6s';

        secondButtons.children[2].style.marginLeft = '0';
        secondButtons.children[2].style.transform = 'scale(0)';
        secondButtons.children[2].style.transitionDelay = '.5s';

        secondButtons.children[7].style.margin = '0';
        secondButtons.children[7].style.transform = 'scale(0)';
        secondButtons.children[7].style.transitionDelay = '.4s';

        secondButtons.children[1].style.marginTop = '0';
        secondButtons.children[1].style.transform = 'scale(0)';
        secondButtons.children[1].style.transitionDelay = '.3s';

        secondButtons.children[5].style.margin = '0';
        secondButtons.children[5].style.transform = 'scale(0)';
        secondButtons.children[5].style.transitionDelay = '.2s';

        secondButtons.children[3].style.marginRight = '0';
        secondButtons.children[3].style.transform = 'scale(0)';
        secondButtons.children[3].style.transitionDelay = '.1s';

        secondButtons.children[4].style.margin = '0';
        secondButtons.children[4].style.transform = 'scale(0)';
        secondButtons.children[4].style.transitionDelay = '0s';

    } else {
        secondButtons.children[0].style.marginBottom = '130px';
        secondButtons.children[0].style.transform = 'scale(1)';
        secondButtons.children[0].style.transitionDelay = '0s';

        secondButtons.children[6].style.margin = '0 0 100px 100px';
        secondButtons.children[6].style.transform = 'scale(1)';
        secondButtons.children[6].style.transitionDelay = '.1s';

        secondButtons.children[2].style.marginLeft = '130px';
        secondButtons.children[2].style.transform = 'scale(1)';
        secondButtons.children[2].style.transitionDelay = '.2s';

        secondButtons.children[7].style.margin = '100px 0 0 100px';
        secondButtons.children[7].style.transform = 'scale(1)';
        secondButtons.children[7].style.transitionDelay = '.3s';

        secondButtons.children[1].style.marginTop = '130px';
        secondButtons.children[1].style.transform = 'scale(1)';
        secondButtons.children[1].style.transitionDelay = '.4s';

        secondButtons.children[5].style.margin = '100px 100px 0 0';
        secondButtons.children[5].style.transform = 'scale(1)';
        secondButtons.children[5].style.transitionDelay = '.5s';

        secondButtons.children[3].style.marginRight = '130px';
        secondButtons.children[3].style.transform = 'scale(1)';
        secondButtons.children[3].style.transitionDelay = '.6s';

        secondButtons.children[4].style.margin = '0 100px 100px 0';
        secondButtons.children[4].style.transform = 'scale(1)';
        secondButtons.children[4].style.transitionDelay = '.7s';
    }
}