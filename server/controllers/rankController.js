import keywordTracking from "../models/keywordTracking";

// Add a keyword to track
export const addKeyword = async (req, res) => {
    try {
        const {keyword, url} = req.body;

        if(!keyword || !url) return res.status(400).json({ success: false,
             message: "Keyword and URL are required" });

        // Extract domain from URL 
        let domain;
        try {
            const urlObj = new URL(url.startsWith("http") ? url : `https://${url}`);
            domain = urlObj.hostname.replace("www.", "")
        } catch {
            return res.status(400).json({ success: false, message: "Invalid URL format" });
        }

        // Check if already tracking this keyword+domain 
        const existing = await keywordTracking.findOne({ userId: req.userId, keyword: keyword.toLowercase().trim(), domain });

        if(existing) {
            return res.status(400).json({ success: false, message: "Already tracking this keyword for this domain" });
        }

    } catch (error) {
        
    }
}

// Add a keyword to track
export const getKeywords = async (req, res) => {
    
}

// Get single keyword with full history
export const getKeyword = async (req, res) => {
    
}

// Manually refresh a keyword ranking
export const refreshKeyword = async (req, res) => {
    
}

// Delete keyword tracking
export const deleteKeyword = async (req, res) => {
    
}

// Toggle tracking active/inactive
export const toggleTracking = async (req, res) => {
    
}