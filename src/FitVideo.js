export default class FitVideo {
    constructor(wrapper, videoWrapper, video, mode = 'cover', callback = () => {
    }) {
        this.wrapper = wrapper;
        this.videoWrapper = videoWrapper;
        this.video = video;
        this.mode = mode;
        this.callback = callback;
        this.init = this.init.bind(this);
        this.resize = this.resize.bind(this);
        video.videoWidth ? this.init() : video.addEventListener('loadedmetadata', this.init);
    }

    init() {
        this.videoAspect = this.video.videoWidth / this.video.videoHeight;
        window.addEventListener('resize', this.resize);
        this.resize();
    }

    destroy() {
        window.removeEventListener('resize', this.resize);
    }

    resize() {
        const wrapperRect = this.wrapper.getBoundingClientRect();
        const wrapperAspect = wrapperRect.width / wrapperRect.height;

        let width;
        let height;
        let top;
        let left;

        if (wrapperAspect > this.videoAspect) {
            width = this.mode === 'cover' ? wrapperRect.width : wrapperRect.height * this.videoAspect;
            height = this.mode === 'cover' ? width / this.videoAspect : wrapperRect.height;

            width = Math.ceil(width);
            height = Math.ceil(height);

            left = this.mode === 'cover' ? 0 : (wrapperRect.width - width) * 0.5;
            top = this.mode === 'cover' ? (wrapperRect.height - height) * 0.5 : 0;
        } else {
            height = this.mode === 'cover' ? wrapperRect.height : wrapperRect.width / this.videoAspect;
            width = this.mode === 'cover' ? height * this.videoAspect : wrapperRect.width;

            width = Math.ceil(width);
            height = Math.ceil(height);

            left = this.mode === 'cover' ? (wrapperRect.width - width) * 0.5 : 0;
            top = this.mode === 'cover' ? 0 : (wrapperRect.height - height) * 0.5;
        }

        this.videoWrapper.style.width = `${width}px`;
        this.videoWrapper.style.height = `${height}px`;
        this.videoWrapper.style.transform = `translate(${left}px, ${top}px)`;

        if (typeof this.callback === 'function') {
            this.callback({width, height});
        } else {
            console.warn('FitVideo - callback should be typeof "function"');
        }
    }
}



