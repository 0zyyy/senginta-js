import axios from "axios";


export default class Search{
    constructor(search_word, start_page = 1, max_page = 1){
        this.search_word = search_word;
        this.start_page = start_page;
        this.max_page = max_page;

        this.sleep = [];
        this.dict_of_td = {};
        this.json_of_td = [];
    }

    async postResult(url, title){
        const headers = {
			"Host": "ieeexplore.ieee.org",
			"Connection": "keep-alive",
			"Accept": "application/json",
			"Content-Type": "application/json",
			"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
			"Origin": "https://ieeexplore.ieee.org",
			"Sec-Fetch-Site": "same-origin",
			"Sec-Fetch-Mode": "cors",
			"Sec-Fetch-Dest": "empty",
			"Referer": 'https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=' + title,
		}
        const payload = {
			"newsearch":"true",
			"queryText":title,
			"highlight":"true",
			"returnFacets":["ALL"],
			"returnType":"SEARCH",
			"refinements":["ContentType:Conferences","ContentType:Journals"],
			"matchPubs":"true"
		}

        try{
            const resp = await axios.post(url,payload,{
                headers: headers
            });
            console.log(resp);
        }catch(e){
            return;
        }
    }
}