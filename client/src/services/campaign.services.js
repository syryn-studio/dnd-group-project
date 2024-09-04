import axios from 'axios';

const http = axios.create({
    "baseURL": "http://localhost:8000/api/campaigns"
});

const CampaignService = {
    "createNewCampaign": async (campaignData) => {
        try {
            const res = await http.post("/", campaignData)
            return res.data
        } catch (err) { throw err }
    },
    "getAllCampaigns": async (user) => {
        try {
            const endPoint = user ? `/user/${user}` : '/';
            const response = await http.get(endPoint);
            return response.data
        }
        catch (error) { throw error }
    },
    "getOneCampaign": async (id) => {
        try {
            const res = await http.get(`/${id}`)
            return res.data
        } catch (err) { throw err }
    },
    "updateCampaign": async (id, data) => {
        try {
            const res = await http.put(`/${id}`, data)
            return res.data
        } catch (err) { throw err }
    },
    "deleteCampaign": async (id) => {
        try {
            const res = await http.delete(`/${id}`)
            return res.data
        } catch (err) { throw err }
    }
}

export default CampaignService;