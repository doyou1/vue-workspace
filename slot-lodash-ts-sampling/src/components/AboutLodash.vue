<script setup lang="ts">
import lodash from "lodash";
import { ref, onMounted, computed } from "vue";

const saves = ["profile", "settings"];
const done = lodash.after(saves.length, () => {
  console.log("done saving");
});
lodash.forEach(saves, (type: string) => {
  console.log(type);
  done();
});

console.log(lodash.map(["6", "8", "10"], lodash.ary(parseInt, 1)));
// => [6, 8, 10]

const count = ref(0);
const handleClick = () => {
  console.log(count.value++);
};
onMounted(() => {
  const before = document.getElementById("before");
  before.addEventListener("click", lodash.before(5, handleClick));
});

function greet(greetting: string, punctuation: string) {
  return `${greetting} ${this.user}${punctuation}`;
}

const object1 = { user: "fred" };
const bound1 = lodash.bind(greet, object1, "hi");
bound1("!");
// => 'hi fred!'

// Bound with placeholders.
const bound2 = lodash.bind(greet, object1, lodash, "!");
bound2("hi");

const bound3 = lodash.bind(greet, object1);
bound3("hi", "!");

function greet1(greeting: string, punctuation: string) {
  return `${greeting} ${this.user} ${punctuation}`;
}

function greet2(greeting: string, punctuation: string) {
  return `${greeting}ya ${this.user} ${punctuation}`;
}
const isToggle = ref(false);
const object2 = ref({
  user: "fred",
  greet: greet1,
});
const bound4 = lodash.bindKey(object2.value, "greet", "hi");
const toggle = () => {
  isToggle.value = !isToggle.value;
  object2.value.greet = !isToggle.value ? greet1 : greet2;
};
const compBound4 = computed(() => (punctuation: string) => bound4(punctuation));
</script>

<template>
  <h2>Lodash Function</h2>
  <div>
    <h4>after(n, func)</h4>
    <div>
      The opposite of `_.before;` this method creates a function that invokes
      `func` once it's called `n` or more times.
    </div>
    <div>
      `_.before`와 반대로, 이 method는 `n`이 n번 이상 호출되면 `func`를 호출하는
      함수를 만듭니다.
    </div>
    <pre>
    const saves = ["profile", "settings"];
    const done = lodash.after(saves.length, () => {
      console.log("done saving");
    });
    lodash.forEach(saves, (type: string) => {
      console.log(type);
      done();
    })
    // => profile
    // => settings
    // => done saving
    </pre>
  </div>
  <div>
    <h4>ary(func, [n=func.length])</h4>
    <div>
      Creates a function that invokes `func`, with up `n` arguments, ignoring
      any additional arguments.
    </div>
    <div>
      추가 인수를 무시하고 최대 `n`개의 인수를 사용하여 `func`를 호출하는 함수를
      만듭니다.
    </div>
    <pre>
    lodash.map(['6', '8', '10'], lodash.ary(parseInt, 1));
    // => [6, 8, 10]
    </pre>
  </div>
  <div>
    <h4>before(n, func)</h4>
    <div>
      Creates a function that invokes `func`, with the `this` binding and
      arguments of the created function, while it's called less than `n` times.
      Subsequent calls to the created function return the result of the last
      `func` invocation.
    </div>
    <div>
      생성된 함수의 'this' 바인딩 및 인수를 사용하여 'func'를 호출하는 함수를
      생성하지만 'n'번 미만으로 호출됩니다. 생성된 함수에 대한 후속 호출은
      마지막 'func' 호출의 결과를 반환합니다.
    </div>
    <pre>
      const count = ref(1);
      const handleClick = () => {
        console.log(count.value++);
      }
      onMounted(() => {
        const before = document.getElementById("before");
        before.addEventListener("click", lodash.before(5, handleClick));  
      });
    </pre>
    <button id="before">before test count: {{ count }}</button>
  </div>
  <div>
    <h4>bind(func, thisArg, [partials])</h4>
    <div>
      Creates a function that invokes `func` with the `this` binding of
      `thisArg` and `partials` prepended to the arguments it receives. The
      `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
      may be used as a placeholder for partially applied arguments. Note: Unlike
      native `Function#bind`, this method doesn't set the "length" property of
      bound functions.
    </div>
    <div>
      'thisArg'와 'partials'의 'this' 바인딩을 받은 인수 앞에 붙여 'func'를
      호출하는 함수를 만듭니다. 모놀리식 빌드에서 '_'로 기본 설정되는
      '.bind.placeholder' 값은 부분적으로 적용된 인수의 자리 표시자로 사용될 수
      있습니다. 참고: 네이티브 'Function#bind'와 달리, 이 메서드는 바인딩된
      함수의 "length" 속성을 설정하지 않습니다.
    </div>
    <pre>
      const greet = (greetting, punctuation) => {
        return `${greetting} ${this.user}${punctuation}`;
      }

      const object1 = { 'user': 'fred' };
      const bound1 = lodash.bind(greet, object1, 'hi');
      bound1('!');
      // => 'hi fred!'

      // Bound with placeholders.
      const bound2 = lodash.bind(greet, object1, lodash, '!');
      bound2('hi');
      // => 'hi fred!'

      const bound3 = lodash.bind(greet, object1);
      bound3('hi', '!');
      // => 'hi fred!'
    </pre>
    <div>bound1('!'): {{ bound1("!") }}</div>
    <div>bound2('hi'): {{ bound2("hi") }}</div>
    <div>bound3('hi', '!'): {{ bound3("hi", "!") }}</div>
  </div>
  <div>
    <h4>bindKey(object, key, [partials])</h4>
    <div>
      Creates a function that invokes the method at `object[key]` with
      `partials` prepended to the arguments it receives. This method differs
      from `_.bind` by allowing bound functions to reference methods that may be
      redefined or don't yet exist. The `_.bindKey.placeholder` value, which
      defaults to `_` in monolithic builds, may be used as a placeholder for
      partially applied arguments.
    </div>
    <div>
      인수 앞에 'partials'를 붙여 'object[key]'에서 메서드를 호출하는 함수를
      만듭니다. 이 메서드는 정의되거나 아직 존재하지 않는 참조 메서드에 바인딩된
      함수를 허용하여 '.bind'와 다릅니다. 모놀리식 빌드에서 '_'로 기본 설정되는
      '.bindKey.placeholder' 값은 부분적으로 적용된 인수의 자리 표시자로 사용될
      수 있습니다.
    </div>
    <pre>
      function greet1(greeting: string, punctuation: string) {
        return `${greeting} ${this.user} ${punctuation}`;
      }

      function greet2(greeting: string, punctuation: string) {
        return `${greeting}ya ${this.user} ${punctuation}`;
      }
      const isToggle = ref(false);
      const object2 = ref({
        'user': 'fred',
        'greet': greet1,
      });
      const bound4 = lodash.bindKey(object2.value, 'greet', 'hi');
      const toggle = () => {
        isToggle.value = !isToggle.value;
        object2.value.greet = !isToggle.value ? greet1 : greet2;
      }
      const compBound4 = computed(() =>  (punctuation: string) => bound4(punctuation));
    </pre>
    <div>compBound4('!'): {{ compBound4("!") }}</div>
    <button @click="toggle">toggle bindKey</button>
  </div>
</template>

<style scoped></style>
