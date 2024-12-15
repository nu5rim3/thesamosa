import React from 'react';

const MenuSection: React.FC = () => {
    return (
        <section id="menu" className="py-12 md:py-24 lg:py-32 w-full min-h-screen flex flex-col items-center md:pt-10 h-screen">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose a Variant to Bite</h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Choose from a wide range of samosa variants to satisfy your taste buds.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className='flex justify-end items-center'>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://plus.unsplash.com/premium_photo-1695297515362-b51affc09b40?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg" alt="Sunset in the mountains" />
                        <div className="px-6 py-2">
                            <div className="font-bold text-xl mb-2">The Fijian</div>
                            <p className="text-gray-700 text-base">
                                fijian is not an ordinary samosa, its a samosa with chickpeas, green twist of indian spices and a hint of fijian herbs.
                            </p>
                        </div>
                        <div className="px-6 py-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fijian_samosa</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#vegan</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#no_potato</span>
                        </div>
                    </div>
                </div>

                <div className='flex justify-start items-center'>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://plus.unsplash.com/premium_photo-1695297515362-b51affc09b40?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sunset in the mountains" />
                        <div className="px-6 py-2">
                            <div className="font-bold text-xl mb-2">The Cheesy Chicken</div>
                            <p className="text-gray-700 text-base">
                                Fill with chicken and cheese, mashroom with a hint of origano. Real Italian taste.
                            </p>
                        </div>
                        <div className="px-6 py-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Chessy_Chicken</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mozzaralla</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mashroom</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Origano</span>
                        </div>
                    </div>
                </div>

                <div className='flex justify-end items-center'>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src='https://plus.unsplash.com/premium_photo-1695297515362-b51affc09b40?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Sunset in the mountains" />
                        <div className="px-6 py-2">
                            <div className="font-bold text-xl mb-2">The Cheesy Egg</div>
                            <p className="text-gray-700 text-base">
                                Samosa fill with egg and cheese with nai kottchi.
                            </p>
                        </div>
                        <div className="px-6 py-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </div>

                <div className='flex justify-start items-center'>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://plus.unsplash.com/premium_photo-1695297515362-b51affc09b40?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sunset in the mountains" />
                        <div className="px-6 py-2">
                            <div className="font-bold text-xl mb-2">The Beef Keema</div>
                            <p className="text-gray-700 text-base">
                                Samosa fiiled with beef keema with a hint of indian spices.
                            </p>
                        </div>
                        <div className="px-6 py-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;