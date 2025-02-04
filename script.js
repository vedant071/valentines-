        function moveNoButton(button) {
            button.style.transform = 'translateX(-100px)';
            setTimeout(() => {
                button.style.transform = 'translateX(0)';
            }, 300);
        }