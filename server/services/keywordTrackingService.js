import { rankTracker } from "./rankTrackerService.js";

export async function keywordTracking(tracking) {
    try {
        let result;

        // Try up to 2 times for reliability
        for(let attempt = 1; attempt <= 2; attempt++) {
            result = await rankTracker(tracking.keyword, tracking.domain)
            if (result.success && result.data.totalResultScanned > 0) break;
            
            if (attempt < 2) await new Promise((r) => setTimeout(r, result.success ? 3000 : 5000))

            if (result.success) {
                const prev = tracking.currentPosition;
                const today = new Date()
                today.setHours(0, 0, 0, 0);

                tracking.currentPosition = result.data.position;
            }

        }
    } catch (error) {
        
    }
}