// Define the Video class
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    // Method to display watching information
    watch() {
        return `${this.uploader} watched all ${this.time} seconds of ${this.title}!`;
    }
}

// Instantiate first Video instance and call watch() method
const video1 = new Video("JavaScript Tutorial", "JohnDoe", 600);
console.log(video1.watch());

// Instantiate second Video instance with different values
const video2 = new Video("React Crash Course", "JaneSmith", 1200);
console.log(video2.watch());

// Bonus: Array to store data for five Video instances
const videoData = [
    { title: "CSS Flexbox Guide", uploader: "WebDevMaster", time: 450 },
    { title: "Node.js Basics", uploader: "CodeGuru", time: 1800 },
    { title: "Python for Beginners", uploader: "DataSciencePro", time: 2400 },
    { title: "Git and GitHub Tutorial", uploader: "VersionControlExpert", time: 900 },
    { title: "Database Design", uploader: "BackendDev", time: 1500 }
];

// Bonus: Loop through the array to instantiate Video instances
const videoInstances = [];

for (const data of videoData) {
    const video = new Video(data.title, data.uploader, data.time);
    videoInstances.push(video);
}

// Display all video instances
console.log("\n--- All Video Instances ---");
videoInstances.forEach((video, index) => {
    console.log(`Video ${index + 1}: ${video.watch()}`);
});