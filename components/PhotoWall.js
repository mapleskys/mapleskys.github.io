export const PhotoWall = {
    template: `
        <div class="relative w-screen h-screen overflow-hidden bg-gray-100">
            <!-- 照片容器 -->
            <div ref="container" 
                 class="absolute flex flex-wrap gap-4 p-4"
                 :class="{'animate-slide': isAnimating}"
                 :style="containerStyle"
                 @animationend="handleAnimationEnd">
                
                <div v-for="(photo, index) in displayPhotos" 
                     :key="index"
                     class="photo-item relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                     :style="photoItemStyle"
                     @click="openModal(photo)">
                    <img :src="photo.url" 
                         :alt="photo.description"
                         class="w-full h-full object-cover"
                         loading="lazy">
                </div>
            </div>

            <!-- 模态框 -->
            <div v-if="selectedPhoto" 
                 class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                 @click.self="closeModal">
                <div class="relative bg-white rounded-xl p-6 max-w-4xl w-11/12 max-h-[90vh] overflow-auto">
                    <button @click="closeModal" 
                            class="absolute right-4 top-4 text-3xl text-gray-500 hover:text-gray-700">
                        &times;
                    </button>
                    <img :src="selectedPhoto.url" 
                         :alt="selectedPhoto.description"
                         class="w-full max-h-[70vh] object-contain rounded-lg">
                    <p class="mt-4 text-gray-700 text-lg">{{ selectedPhoto.description }}</p>
                </div>
            </div>
        </div>
    `,

    data() {
        return {
            photos: [
                {
                    url: 'https://s21.ax1x.com/2025/05/05/pEqKhAx.jpg',
                    description: '1'
                },
                {
                    url: 'https://s21.ax1x.com/2025/05/05/pEqKWH1.jpg',
                    description: '2'
                },
                {
                    url: 'https://s21.ax1x.com/2025/05/05/pEqK54K.jpg',
                    description: '3'
                },
                {
                    url: 'https://s21.ax1x.com/2025/05/05/pEqK4N6.jpg',
                    description: '4'
                },
                {
                    url: 'https://s21.ax1x.com/2025/05/05/pEqKRBR.jpg',
                    description: '5'
                },
                {
                    url: 'https://s21.ax1x.com/2025/05/05/pEqKT3D.jpg',
                    description: '6'
                },
                {
                    url: 'https://s21.ax1x.com/2025/05/05/pEqKo9O.jpg',
                    description: '7'
                },
                {
                    url: 'https://s21.ax1x.com/2025/05/05/pEqK7ge.jpg',
                    description: '8'
                },
                {
                    url: 'https://pic1.imgdb.cn/item/68184b0758cb8da5c8dcaae5.jpg',
                    description: '9'
                },
                {
                    url: 'https://pic1.imgdb.cn/item/68184b0758cb8da5c8dcaae8.jpg',
                    description: '10'
                },
                {
                    url: 'https://pic1.imgdb.cn/item/68184b0758cb8da5c8dcaae6.jpg',
                    description: '11'
                },
                {
                    url: 'https://pic1.imgdb.cn/item/68184b0758cb8da5c8dcaae7.jpg',
                    description: '12'
                },
                {
                    url: 'https://pic1.imgdb.cn/item/68184b0658cb8da5c8dcaae4.jpg',
                    description: '13'
                },
                {
                    url: 'https://pic1.imgdb.cn/item/68184b1058cb8da5c8dcaae9.jpg',
                    description: '14'
                },
            ],
            selectedPhoto: null,
            photosPerRow: 4,
            photosPerColumn: 3,
            isAnimating: true
        }
    },

    computed: {
        displayPhotos() {
            const totalNeeded = this.photosPerRow * this.photosPerColumn * 2;
            return Array(totalNeeded).fill().map((_, i) =>
                this.photos[i % this.photos.length]
            );
        },

        containerStyle() {
            return {
                width: `${window.innerWidth * 2}px`,
                height: '100vh',
            }
        },

        photoItemStyle() {
            return {
                width: `calc((100vw / ${this.photosPerRow}) - 20px)`,
                height: `calc((100vh / ${this.photosPerColumn}) - 20px)`
            }
        }
    },

    methods: {
        openModal(photo) {
            this.selectedPhoto = photo;
        },

        closeModal() {
            this.selectedPhoto = null;
        },

        handleAnimationEnd() {
            this.isAnimating = false;
            requestAnimationFrame(() => {
                this.isAnimating = true;
            });
        },

        handleResize() {
            this.isAnimating = false;
            requestAnimationFrame(() => {
                this.isAnimating = true;
            });
        }
    },

    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.isAnimating = true;
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
}; 
