document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const readMoreLink = document.getElementById('read-more');

    // Show the cookie banner with animation
    setTimeout(function() {
        cookieBanner.classList.add('show');
    }, 500);

    // Prevent further navigation until cookies are accepted or declined
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            const acceptedCookies = getCookie('accepted_cookies');
            const declinedCookies = getCookie('declined_cookies');

            if (!acceptedCookies && !declinedCookies && e.target.id !== 'read-more') {
                e.preventDefault();
                alert('Devi accettare o rifiutare i cookie prima di navigare.');
            }
        });
    });

    // Event listener for the "Read More" link
    readMoreLink.addEventListener('click', function() {
        setTimeout(function() {
            alert('Devi accettare o rifiutare i cookie prima di navigare.');
        }, 200);
    });

    // Function to get the value of a cookie
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;])"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
});