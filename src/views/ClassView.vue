<template>
    <div class="container py-5">
        <div v-if="video">
            <!-- Video Player -->
            <div class="video-container mb-4">
                <video controls width="100%" ref="videoPlayer" class="rounded shadow">
                    <source :src="video.path" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <!-- Video Details -->
            <h2 class="video-title text-dark">{{ video.title }}</h2>
            <p class="text-muted">{{ video.description }}</p>
            <hr />
            <h5 class="text-dark">Video Details:</h5>
            <ul class="list-unstyled">
                <li><strong>Duration:</strong> {{ formattedDuration }}</li>
                <li><strong>Category:</strong> {{ video.category }}</li>
            </ul>
            <hr />
            <h5>Previously Viewed:</h5>
            <ul>
                <li v-for="prev in previousVideos" :key="prev.id">
                    {{ prev.title }}
                </li>
            </ul>
        </div>
        <div v-else>
            <p>Loading video details...</p>
        </div>
    </div>
</template>

<script>
import videosData from "@/data/class.json";

export default {
    name: "ClassView",
    data() {
        return {
            video: null,
            previousVideos: [],
            videoDuration: 0, // Duration in seconds
        };
    },
    computed: {
        formattedDuration() {
            const hours = Math.floor(this.videoDuration / 3600);
            const minutes = Math.floor((this.videoDuration % 3600) / 60);
            const seconds = this.videoDuration % 60;

            return `${hours.toString().padStart(2, '0')}:${minutes
                .toString()
                .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        },
    },
    mounted() {
        const videoId = this.$route.params.id; // Get the video ID from the route
        const selectedVideo = videosData.find((v) => v.id === Number(videoId));

        if (selectedVideo) {
            this.video = selectedVideo;
            this.storePreviousVideo(selectedVideo);

            this.$nextTick(() => {
                const video = this.$refs.videoPlayer;
                if (video) {
                    video.addEventListener("loadedmetadata", () => {
                        this.videoDuration = Math.floor(video.duration); // Get duration in seconds
                    });
                }
            });
        }
    },
    methods: {
        storePreviousVideo(video) {
            if (!this.previousVideos.some((v) => v.id === video.id)) {
                this.previousVideos.push(video);
            }
        },
    },
};
</script>

<style scoped>
.video-container {
    position: relative;
    overflow: hidden;
}

.video-title {
    font-family: "Lobster Two", cursive;
    margin-bottom: 15px;
}

video {
    display: block;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
