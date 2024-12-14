import React from 'react'

const LocationSection = () => {
    return (
        <React.Fragment>
            <section id="location" className="py-12 md:py-24 lg:py-32 w-full h-screen flex items-center justify-center">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find the location</h2>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Feel the real crunchiness of a samosa by visiting our outlet!
                            </p>
                        </div>
                        <div className="w-full items-center justify-center hidden md:flex">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.207981016192!2d79.89129827499599!3d6.8656622931329325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bdd8cbb3adb%3A0x3bfd0a09d63e11d8!2sThe%20Samosa!5e0!3m2!1sen!2slk!4v1730371710789!5m2!1sen!2slk" width="100%" height="600" loading="lazy"></iframe>
                        </div>
                        <div className="w-full items-center justify-center md:hidden flex">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.207981016192!2d79.89129827499599!3d6.8656622931329325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bdd8cbb3adb%3A0x3bfd0a09d63e11d8!2sThe%20Samosa!5e0!3m2!1sen!2slk!4v1730371710789!5m2!1sen!2slk" width="100%" height="300" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default LocationSection