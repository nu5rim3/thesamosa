import React from 'react'
import { Instagram, Facebook } from "lucide-react"
// import { InstagramEmbed } from 'react-social-media-embed'

const SocialSection = () => {

    const instagramUsername = 'thesamosa_lk';

    const openInstagramApp = () => {
        const instagramAppUrl = `instagram://user?username=${instagramUsername}`;
        const instagramWebUrl = `https://www.instagram.com/${instagramUsername}/`;

        // Try to open the Instagram app
        window.location.href = instagramAppUrl;

        // Fallback to the web URL if the app is not available
        setTimeout(() => {
            window.location.href = instagramWebUrl;
        }, 500); // Short delay to allow app opening first
    };

    const facebookUsername = '61567856701576';

    const openFacebookApp = () => {
        const facebookAppUrl = `fb://page/${facebookUsername}`;
        const facebookWebUrl = `https://www.facebook.com/${facebookUsername}/`;

        // Try to open the Facebook app
        window.location.href = facebookAppUrl;

        // Fallback to the web URL if the app is not available
        setTimeout(() => {
            window.location.href = facebookWebUrl;
        }, 500); // Short delay to allow app opening first
    }

    return (
        <React.Fragment>
            <section id="social" className="py-12 md:py-12 lg:py-32 w-full h-screen flex items-center justify-center bg-yellow-400">
                <div className="container px-4 md:px-6 ">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 md:pt-32">Connect With Us</h2>
                    <div className="flex justify-center space-x-4">
                        {/* <button onClick={openInstagramApp}>hello</button> */}
                        <a target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900" onClick={openInstagramApp}>
                            <Instagram className="h-8 w-8" />
                            <span className="sr-only">Instagram</span>
                        </a>

                        <a target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900" onClick={openFacebookApp}>
                            <Facebook className="h-8 w-8" />
                            <span className="sr-only">Facebook</span>
                        </a>
                        {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                            <Twitter className="h-8 w-8" />
                            <span className="sr-only">Twitter</span>
                        </a> */}

                    </div>

                    {/* <div className='md:py-16' style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width={32} />
                    </div> */}
                </div>
            </section>
        </React.Fragment>
    )
}

export default SocialSection