<script setup>
import { ref } from 'vue';
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-MKFLQw1U2NOeOC0lVoDR53Oc",
    apiKey: import.meta.env.VITE_APP_OPENAI_API_KEY,
});
delete configuration.baseOptions.headers['User-Agent'];

const openai = new OpenAIApi(configuration);
const searchText = ref("");
const response = ref("");

const onSubmit = () => {

    const prompt = `
    다음 동작을 수행하세요:
    1- ${searchText.value}와 관련된 기술 키워드 리스트와 해당 키워드 관련 예제를 html, css, js 코드로 제공받습니다.
    2- 출력의 형태는 다음의 JSON 객체의 형태와 같습니다 : 
    {
      'keyword-list' : [
        {
          'id' : 0,
          'keyword' : '...',
          'html' : '...',
          'css' : '...',
          'js' : '...',
        },
        {
          'id' : 1,
          'keyword' : '...',
          'html' : '...',
          'css' : '...',
          'js' : '...',
        },
      ]
    }
    3- 만약 관련 키워드가 없다면, 출력의 형태는 다음의 JSON 객체의 형태와 같습니다.
    {
      'keyword-list' : []
    }
    4- 출력은 모두 영어로 한다.
    `;
    processChatGPT(prompt)
}

const processChatGPT = async (prompt) => {
  const chatCompletion = await openai.createChatCompletion(
        {
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: prompt}],
        },
        {
          "Authorization": `Bearer ${import.meta.env.VITE_APP_OPENAI_API_KEY}`
        },
      );
      response.value = chatCompletion.data.choices[0].message.content;
      // response.value = chatCompletion
      console.log(response.value);
}


// from dotenv import load_dotenv, find_dotenv
// _ = load_dotenv(find_dotenv()) # read local .env file

// openai.api_key = os.getenv("OPENAI_API_KEY")

// # helper function
// # Throughout this course, we will use OpenAI's gpt-3.5-turbo model and the chat completions endpoint.
// # This helper function will make it easier to use prompts and look at the generated outputs.
// def get_completion(prompt, model="gpt-3.5-turbo"):
//     messages = [{"role": "user", "content": prompt}]
//     response = openai.ChatCompletion.create(
//         model=model,
//         messages=messages,
//         temperature=0, # this is the degree of randomness of the model's output
//     )
//     return response.choices[0].message["content"]


</script>

<template>
  <div class="container content-center">
    <div class="my-2 mx-2">
       <form @submit.prevent="onSubmit" action="/">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">web-frontend-skill keyword Search</label>
            <input type="text" id="text" 
            v-model="searchText"
            class="my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Keyword goes here..." required>
            <button 
            type="submit"
            class="my-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Search
            </button>
       </form>
    </div> 
    <div class="my-2 mx-2">
        <div>{{ response }}</div>
    </div> 
  </div>

</template>

<style scoped>
body {
  margin: 0;
}
</style>
