// import { Button } from '@headlessui/react'
import React from 'react'
import pickmeLogo from '../../assets/pickme.png'
import ubereatsLogo from '../../assets/ubereats.png'

const OrderSection = () => {

    const pickupLatitude = '37.7749';
    const pickupLongitude = '-122.4194';
    const dropoffLatitude = '37.7849';
    const dropoffLongitude = '-122.4094';
    const dropoffNickname = 'Destination';

    const openUberApp = () => {
        // Uber deep link URL with pickup and drop-off locations
        const uberAppUrl = `uber://?action=setPickup&pickup[latitude]=${pickupLatitude}&pickup[longitude]=${pickupLongitude}&dropoff[latitude]=${dropoffLatitude}&dropoff[longitude]=${dropoffLongitude}&dropoff[nickname]=${encodeURIComponent(dropoffNickname)}`;
        const uberWebUrl = `https://m.uber.com/ul/?action=setPickup&pickup[latitude]=${pickupLatitude}&pickup[longitude]=${pickupLongitude}&dropoff[latitude]=${dropoffLatitude}&dropoff[longitude]=${dropoffLongitude}&dropoff[nickname]=${encodeURIComponent(dropoffNickname)}`;

        // Try to open the Uber app
        window.location.href = uberAppUrl;

        // Fallback to the web URL if the app is not available
        setTimeout(() => {
            window.location.href = uberWebUrl;
        }, 500); // Short delay to allow app opening first
    };

    const pickmeAppUrl = `pickme://food`; // Replace with any specific path if available
    const pickmeWebUrl = `https://food.pickme.lk`; // The web fallback URL for PickMe Food

    const openPickMeApp = () => {
        // Try to open the PickMe Food app
        window.location.href = pickmeAppUrl;

        // Fallback to the web URL if the app is not available
        setTimeout(() => {
            window.location.href = pickmeWebUrl;
        }, 500); // Short delay to allow app opening first
    };

    return (
        <section id="order" className="w-full min-h-screen flex flex-col items-center md:pt-10">
            <div className="container md:pt-32 md:pb-16 px-4 md:px-6 pt-20 pb-10">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Order Now</h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Get your favorite samosa delivered straight to your door.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main content with yellow and green sections */}
            <div className="w-full flex flex-grow">
                <div className="w-1/2 flex items-center justify-center bg-yellow-300 flex-grow">
                    <a onClick={openUberApp} target="_blank" rel="noopener noreferrer">
                        <img src={pickmeLogo} alt="My Image" className="max-w-full max-h-full object-cover" />
                    </a>
                </div>

                <div className="w-1/2 flex items-center justify-center bg-green-300 flex-grow">
                    <a onClick={openPickMeApp} target="_blank" rel="noopener noreferrer">
                        <img src={ubereatsLogo} alt="My Image" className="max-w-full max-h-full object-cover px-8 md:px-40" />
                    </a>
                </div>
            </div>
        </section>

    )
}

export default OrderSection