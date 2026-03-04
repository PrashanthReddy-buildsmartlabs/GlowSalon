import { useState } from 'react';
import PageHeader from '../components/UI/PageHeader';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// High quality Unsplash images mimicking salon work
const photos = [
    { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80", width: 800, height: 1200 },
    { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80", width: 1080, height: 800 },
    { src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80", width: 1080, height: 1620 },
    { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80", width: 800, height: 1000 },
    { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80", width: 1200, height: 800 },
    { src: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80", width: 1080, height: 1440 },
    { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80", width: 800, height: 1200 },
    { src: "https://images.unsplash.com/photo-1515377659622-4b32d13086cd?auto=format&fit=crop&q=80", width: 1200, height: 900 }
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

                    <MasonryPhotoAlbum
                        photos={photos}
                        onClick={({ index }) => setIndex(index)}
                        columns={(containerWidth) => {
                            if (containerWidth < 640) return 1;
                            if (containerWidth < 1024) return 2;
                            return 3;
                        }}
                        spacing={24}
                        render={{
                            image: (props, { index }) => (
                                <img
                                    {...props}
                                    style={{ ...props.style, borderRadius: '4px' }}
                                    className="cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 object-cover"
                                    alt={`Salon gallery work ${index + 1}`}
                                />
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
