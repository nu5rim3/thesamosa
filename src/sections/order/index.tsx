// import { Button } from '@headlessui/react'
import React from 'react'
import pickmeLogo from '../../assets/pickme.png'
import ubereatsLogo from '../../assets/ubereats.png'

const OrderSection = () => {

    const restaurantUuid = 'street-burger/QyfD6y_iTISMr58OFwxN1A?mod=closedStore&modctx=%257B%2522storeUuid%2522%253A%25224327c3eb-2fe2-4c84-8caf-9f0e170c4dd4%2522%257D&ps=1&sc=SEARCH_SUGGESTION';

    const openUberApp = () => {
        // Uber Eats deep link URL for a specific restaurant
        const uberEatsAppUrl = `ubereats://store/${restaurantUuid}`;
        const uberEatsWebUrl = `https://www.ubereats.com/store/${restaurantUuid}`;

        // Try to open the Uber Eats app
        window.location.href = uberEatsAppUrl;

        // Fallback to the web URL if the app is not available
        setTimeout(() => {
            window.location.href = uberEatsWebUrl;
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
        <React.Fragment>
            <section id="order" className="w-full min-h-screen flex flex-col items-center md:pt-10">
                <div className="container md:pt-32 md:pb-16 px-4 md:px-6 pt-20 pb-10">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Order Now Is Coming Soon</h2>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Get your favorite samosa delivered straight to your door.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main content with yellow and green sections */}
                <div className="w-full flex flex-grow">
                    <div className="w-1/2 flex items-center justify-center bg-yellow-300 flex-grow">
                        <a onClick={() => alert('Coming Soon')} target="_blank" rel="noopener noreferrer">
                            {/* <a onClick={openPickMeApp} target="_blank" rel="noopener noreferrer" className='disabled'> */}
                            <img src={pickmeLogo} alt="My Image" className="max-w-full max-h-full object-cover" />
                        </a>
                    </div>

                    <div className="w-1/2 flex items-center justify-center bg-green-300 flex-grow">
                        <a onClick={() => alert('Coming Soon')} target="_blank" rel="noopener noreferrer">
                            {/* <a onClick={openUberApp} target="_blank" rel="noopener noreferrer"> */}
                            <img src={ubereatsLogo} alt="My Image" className="max-w-full max-h-full object-cover px-8 md:px-40" />
                        </a>
                    </div>
                </div>
            </section>
        </React.Fragment>

    )
}

export default OrderSection