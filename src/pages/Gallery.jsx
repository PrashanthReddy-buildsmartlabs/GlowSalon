import { useState } from 'react';
import PageHeader from '../components/UI/PageHeader';
import { ColumnsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/columns.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// High quality Unsplash images mimicking salon work
const photos = [
    { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80", width: 800, height: 1200 },
    { src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80", width: 1080, height: 800 },
    { src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80", width: 1080, height: 1620 },
    { src: "https://images.unsplash.com/photo-1487412947154-7264a7c0bef8?auto=format&fit=crop&q=80", width: 800, height: 1000 },
    { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80", width: 1200, height: 800 },
    { src: "https://images.unsplash.com/photo-1516975080661-46bfa33215be?auto=format&fit=crop&q=80", width: 1080, height: 1440 },
    { src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80", width: 800, height: 1200 },
    { src: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auto=format&fit=crop&q=80", width: 1200, height: 900 }
];

export default function Gallery() {
    const [index, setIndex] = useState(-1);

    return (
        <div className="bg-white">
            <PageHeader
                title="Our Gallery"
                description="A showcase of our finest work, stunning transformations, and signature styles."
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <ColumnsPhotoAlbum
                        photos={photos}
                        onClick={({ index }) => setIndex(index)}
                        columns={(containerWidth) => {
                            if (containerWidth < 640) return 1;
                            if (containerWidth < 1024) return 2;
                            return 3;
                        }}
                        spacing={24}
                        padding={0}
                        render={{
                            image: (props) => (
                                <div className="overflow-hidden rounded-sm cursor-pointer group shadow-md hover:shadow-xl transition-all duration-500">
                                    <img
                                        {...props}
                                        className="group-hover:scale-105 transition-transform duration-700 ease-out"
                                        alt="Salon gallery work"
                                    />
                                </div>
                            )
                        }}
                    />

                    <Lightbox
                        index={index}
                        slides={photos}
                        open={index >= 0}
                        close={() => setIndex(-1)}
                        plugins={[Zoom]}
                        styles={{ container: { backgroundColor: "rgba(17, 24, 39, 0.95)" } }}
                    />

                </div>
            </section>
        </div>
    );
}
