import React from 'react';

function Footer() {
    return (


        <footer id="footer" class="footer">
            <div class="w-container">
                <div class="footer-flex-container"><a href="#" class="footer-logo-link w-inline-block"><img src="images/BAZAAR..svg" alt="" class="footer-image"></img></a>
                    <div>
                        <h2 class="footer-heading">Categories</h2>
                        <ul role="list" class="w-list-unstyled">
                            <li><a href="#" class="footer-link">Foods and Drinks</a></li>
                            <li><a href="#" class="footer-link">Meat</a></li>
                            <li><a href="#" class="footer-link">Whatever</a></li>
                            <li><a href="#" class="footer-link">Category</a></li>
                        </ul>
                    </div>
                </div>
                <div class="text-block-116">All right reserved Bazaar © 2020</div>
            </div>
        </footer>

    );
}

export default Footer;