import React from 'react';

const GoogleMapUse = () => {

    const googleMapsUrl = "https://www.google.com/maps/place/Mishra+Market+Koini+Bajar/@26.42478,84.5197518";

    const embedUrl = "https://maps.google.com/maps?q=Mishra%20Market%20Koini%20Bajar&t=&z=15&ie=UTF8&iwloc=&output=embed";

    return (
        <div className="flex flex-col items-center justify-center w-full bg-gray-100 rounded-2xl">
            <div className="w-full h-[40vh] bg-white rounded-2xl shadow-2xl overflow-hidden relative group">

                <iframe
                    title="Google Map"
                    src={embedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                ></iframe>

                <div className="absolute bottom-6 right-6">
                    <a 
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all flex items-center gap-2 hover:scale-105"
                    >
                        Open in Google Maps
                    </a>
                </div>

            </div>
        </div>
    );
};

export default GoogleMapUse;