- references: https://vueschool.io/articles/vuejs-tutorials/start-testing-with-vitest-beginners-guide/

# Start Testing With Vitest(Beginner`s Guide)
Welcome to the world of testing! Ensuring that your code is reliable and bug-free is an essential part of the software development process, and using a good testing frameworks can greatly assist in this effort.
> 테스트의 세계에 오신 것을 환영합니다! 코드가 신뢰할 수 있고 버그가 없는지 확인하는 것은 소프트웨어 개발 과정의 필수적인 부분이며, 좋은 테스트 프레임워크를 사용하는 것이 이러한 노력에 큰 도움이 될 수 있습니다.

Vitest is a blazing fast using test framework powered by Vite that makes it easy to write and run tests for your Vue.js components and applications.
> Vitest는 Vite를 기반으로 하는 테스트 프레임워크를 사용하는 매우 빠른 속도로 Vue.js 구성 요소 및 애플리케이션에 대한 테스트를 쉽게 작성하고 실행할 수 있습니다.

In this beginner`s guide, we`ll walk you through the basics of using Vitest and show you how to get started with testing in your Vue projects. You`ll learn how to set up your testing environment, write and run tests, and use the various features and functions provided by Vitest to test your Vue components. Let`s get started!
> 이번 초급 가이드에서는 Vitest 사용에 대한 기본 사항을 안내하고 Vue 프로젝트에서 테스트를 시작하는 방법을 소개합니다. 테스트 환경 설정, 테스트 작성 및 실행, Vitest에서 제공하는 다양한 기능과 기능을 사용하여 Vue 구성 요소를 테스트하는 방법을 배울 수 있습니다. 시작하겠습니다!

## Why Vitest?
Vitest is compatible with the Jest API. You will know how to use Vitest if you are already familiar with Jest. Let`s look at some of the characteristics that make Vitest a fantastic testing framework in addition to the similarities it has with the Jest API:
> Vitest는 Jest API와 호환됩니다. 이미 Jest에 익숙하다면 Vitest를 어떻게 사용하는지 알 수 있을 것입니다. Vitest가 Jest API와 유사한 점 외에 환상적인 테스트 프레임워크가 되는 몇 가지 특징에 대해 살펴보겠습니다:

- Vitest shares the same configuration file as Vite, and test configuration is done inside the `vite.config.js` file to ensure that the test environment is similar to the building environment
- Vitest is compatible with most Jest APIs and libraries, making it easy to migrate from Jest to Vitest
- Vitest supports Hot Module Replacement so that if the test files are changed, new changes can be reflected immediately
> - Vitest는 Vite와 동일한 구성 파일을 공유하며, `vite.config.js` 파일 내부에서 테스트 구성을 수행하여 테스트 환경이 빌딩 환경과 유사한지 확인합니다
> - Vitest는 대부분의 Jest API 및 라이브러리와 호환되므로 Jest에서 Vitest로 쉽게 마이그레이션할 수 있습니다
> - Vitest는 Hot Module Replacement(핫 모듈 교체)를 지원하여 테스트 파일이 변경된 경우 새로운 변경 사항을 즉시 반영할 수 있습니다

## Installation
Vitest requires Vite v3.0.0 and upwards and also Node v14 and upwards. We will be using We will bootstrap the project with the official starter template for Vue.
> Vitest에는 Vite v3.0.0 이상과 Node v14 이상이 필요합니다. Vue의 공식 스타터 템플릿으로 프로젝트를 부트스트랩합니다.

> npm init vue@3
> cd {{ project folder }}
> npm install
> npm run lint
> npm run dev

now looking through our development files we notice a few new changes.
- A new test: unit script in our `package.json`
- A new `/src/components/__tests__/HellowWorld.spec.js` file.
> 이제 개발 파일을 살펴보니 몇 가지 새로운 변경 사항이 있습니다.
> - 새로운 테스트: package.json의 단위 스크립트
> - 새 `/src/components/_tests__/HellowWorld.spec.js` 파일입니다.

Let`s run our default test to check if everything works.
> 기본 테스트를 실행하여 모든 것이 작동하는지 확인해 보겠습니다.

> npm run test:unit

### Basic Testing
Now with Vitest setup in our project let`s create our first test. Our test files can have either `test.js` or `spec.js` extensions.
- Create `example.test.js` inside the `/components/__test__` directory
- add the following code
> 이제 프로젝트에서 Vitest를 설정한 후 첫 번째 테스트를 만들어 보겠습니다. 테스트 파일의 확장자는 test.js 또는 spec.js입니다.
> - `/components/\_\_test__` 디렉토리 내에 `example.test.js`를 만듭니다
> - 다음 코드를 추가합니다

```js
// src/components/__tests__/example.test.js
import { test, expect } from 'vitest';

function sum(a, b) {
    return a + b;
}

test("add 2 numbers", () => {
    expect(sum(2, 3)).toEqual(5);
});
```

Now run `npm run test:unit`
> 이제 `npm run test: unit`을 실행합니다

Hurray. you have written your first test!
Now let`s break down what we did. First, to run our example test, we first imported functions `test` and `expect` from Vitest. We then created our `sum()` function which is the target function for testing.
Now our `test()` function takes 2 arguments, the name of the test or a description of what the test is about and a callback function which contains our test logic.
We also notice that as we run our first test, Vitest does not exit after completing the test but continues to run and gives new results in case of any new changes to our code. This is because Vitest runs a watch mode just like Vite does on your dev server.
Pretty amazing right!
> 만세. 첫 시험을 다 쳤어요!
먼저 예제 테스트를 실행하기 위해 먼저 Vitest에서 `test`와 `expect` 함수를 가져온 다음 테스트 대상 함수인 `sum()` 함수를 만들었습니다.
이제 우리의 `test()` 함수는 테스트의 이름이나 테스트 내용에 대한 설명, 그리고 테스트 로직을 포함하는 콜백 함수 등 2개의 인수를 사용합니다.
또한 첫 번째 테스트를 실행할 때 Vitest는 테스트를 완료한 후 종료되지 않고 계속 실행되며 코드에 새로운 변경 사항이 발생할 경우 새로운 결과를 제공합니다. 이는 Vitest가 개발 서버에서 실행하는 것과 마찬가지로 Watch 모드를 실행하기 때문입니다.
꽤 놀랍죠, 그렇죠!

## Testing Vue.js Components
With our basic knowledge on how to create tests in Vitest let's try a more advanced and real-life example like testing a Vue.js Components.
We can create a simple component called `AgeGuess.vue` that enables users to enter a name and guess the age of the user based on the name entered using the `[Agify.io](https://agify.io/)` API.
Inside the `src/components` folder, let's create `AgeGuess.vue` file and add the following code:
> Vitest에서 테스트를 생성하는 방법에 대한 기본 지식을 바탕으로 Vue.js Components의 테스트와 같은 보다 발전된 실제 사례를 시도해 보겠습니다. 
> `[Agify.io](https://agify.io/))` API를 이용하여 입력한 이름을 바탕으로 이름을 입력하고 나이를 추측할 수 있는 간단한 구성요소인 `AgeGuess.vue`를 만들 수 있습니다.
> `src/components` 폴더 안에 `AgeGuess.vue` 파일을 만들고 다음 코드를 추가합니다:

```js
<template>
  <h1>{{ props.title }}</h1>
  <div class="main">
    <div class="creds">
      <div
        style="width: 400px; height: 130px; margin-top: 20px; font-size: larger"
      >
        <span>Name: {{ user.name }}</span> <br />
        <span>Age: {{ user.age }}</span>
      </div>
      <div class="form">
        <label> Enter Firstname </label>
        <input
          type="text"
          v-model="user.search"
          style="font-size: 20px"
          placeholder="Enter name"
          @change="getAge"
        />
        <button type="button" @click="getAge">Guess the age</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "Test Component",
  },
});

const user = reactive({ name: "", age: "", search: null });

const getAge = () => {
  fetch("https://api.agify.io/?name=" + user.search)
    .then((response) => response.json())
    .then((data) => {
      user.age = data.age;
      user.name = data.name;
      user.search = null;
    });
};
</script>
```

Now let's test our props
> 이제 prop을 테스트해 보겠습니다

### Testing props
First, create a test file dedicated to testing our new component. The test file name must follow a specific naming pattern that begins with the component name and ends with either `.spec.js` or `.test.js`.
> 먼저 새로운 구성요소의 테스트 전용 테스트 파일을 만듭니다. 테스트 파일 이름은 구성요소 이름으로 시작하여 `.spec.js` 또는 `.test.js`로 끝나는 특정 이름 패턴을 따라야 합니다.

It is required that when testing many components, each one should have its own test file. Let's create the `AgeGuess.test.js` test file inside the components folder. A straightforward test script for our `AgeGuess` component will be included in the package.
> 여러 컴포넌트를 테스트할 때는 각각의 테스트 파일이 있어야 합니다. 컴포넌트 폴더 안에 `AgeGuess.test.js` 테스트 파일을 만들어 보겠습니다. 우리의 `AgeGuess` 컴포넌트에 대한 간단한 테스트 스크립트가 패키지에 포함될 것입니다.

Let's test the `AgeGuess` component to verify if it mounts correctly and receives the right props. By including the following code in the `AgeGuess.test.js` file, we can check the value of the title prop at mount time:
> `AgeGuess` 구성 요소가 올바르게 마운트되고 올바른 prop을 받았는지 테스트해 보겠습니다. `AgeGuess.test.js` 파일에 다음 코드를 포함시킴으로써 마운트 시 타이틀 prop의 값을 확인할 수 있습니다:

```js
//components/__test__/AgeGuess.test.js
import { test, expect } from "vitest";
//import mount
import { mount } from "@vue/test-utils";

//import your component
import AgeGuess from "../AgeGuess.vue";

test("mount component", async () => {
  expect(AgeGuess).toBeTruthy();

  const wrapper = mount(AgeGuess, {
    props: {
      title: "Guess User Age App",
    },
  });
  expect(wrapper.text()).toContain("Guess User Age App");
});
```

With testing our `AgeGuess` component in the code above, we import `mount` from `@vue/test-utils`, which enables us to encase our component in a unique object named `Wrapper` and access a variety of test parameters.
Now lets run our test to verify if our test passed.
> 위 코드의 'AgeGuess' 구성 요소를 테스트하면 '@vue/test-utils'에서 'mount'를 가져오므로 'Wrapper'라는 고유 개체에 구성 요소를 넣고 다양한 테스트 파라미터에 액세스할 수 있습니다.
> 이제 테스트를 실행하여 테스트가 통과되었는지 확인해 보겠습니다.

### Test Components with HTTP requests
