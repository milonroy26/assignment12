"use client";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const MyProgress = () => {
    return (
        <>
            <ProgressBar
                height="4px"
                color="#FE2E64"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};

export default MyProgress;