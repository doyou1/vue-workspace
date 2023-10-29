<script setup lang="ts">
import lodash from "lodash";
import { ref, onMounted, computed } from "vue";

/** after */
const saves = ["profile", "settings"];
const done = lodash.after(saves.length, () => {
  console.log("done saving");
});
lodash.forEach(saves, (type: string) => {
  console.log(type);
  done();
});

/** ary */
console.log(lodash.map(["6", "8", "10"], lodash.ary(parseInt, 1)));
// => [6, 8, 10]

/** before */
const count = ref(0);
const handleClick = () => {
  console.log(count.value++);
};
onMounted(() => {
  const before = document.getElementById("before");
  before.addEventListener("click", lodash.before(5, handleClick));
});

/** bind */
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

/** bindKey */
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

/** curry */
const abc = (a: string | number, b: string | number, c: string | number) => [
  a,
  b,
  c,
];

console.log(abc(1, 2, 3));
// => [1, 2, 3]

const curried = lodash.curry(abc);

/** curryRight */
const curriedRight = lodash.curryRight(abc);

/** debounce */
const windowSize = ref({width: window.innerWidth, height: window.innerHeight})

window.addEventListener("resize", lodash.debounce((e: Event) => {
  windowSize.value = {
    width: (e.currentTarget as Window).innerWidth,
    height: (e.currentTarget as Window).innerHeight,
  }
}, 150));

const debouncedCount = ref(0);
const handleDebouncedClick = lodash.debounce(()=> {
  debouncedCount.value++;
}, 1000, { 'leading': true, 'trailing': false});

/** deferred */
const input = "deferred";
console.log("first", input, new Date().getTime());

lodash.defer((text: string) => {
  console.log("second", text, new Date().getTime());
}, input);

console.log("third", input, new Date().getTime());
// => first ...
// => third ...
// => second ...

/** delay */
console.log("delay", "first");

lodash.delay((text: string) => {
  console.log("delay", "second", text);
}, 1000, "later");

console.log("delay", "third");
// => delay first
// => delay third
// => delay second later

/** flip */
const flipped = lodash.flip(function() {
  return lodash.toArray(arguments)
});

/** memoize */
const object = { 'a': 1, 'b': 2};
const other = { 'c': 3, 'd': 4};
const values = lodash.memoize(lodash.values);
console.log(values(object));
// => [1, 2]
console.log(values(other));
// => [3, 4]

object.a = 2;
console.log(values(object), object);
// => [1, 2] {a: 2, b: 2}

// Modify the result cache.
values.cache.set(object, ['a', 'b']);
console.log(values(object), object);
// => ['a', 'b'] {a: 2, b: 2}

lodash.memoize.Cache = WeakMap;
console.log(values(object));
// => ['a', 'b']
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
  <div>
    <h4>curry(func, [arity=func.length])</h4>
    <div>
      Creates a function that accepts arguments of `func` and either invokes
      `func` returning its result, if at least `arity` number of arguments have
      been provided, or returns a function that accepts the remaining `func`
      arguments, and so on. The arity of `func` may be specified if
      `func.length` is not sufficient. The `_.curry.placeholder` value, which
      defaults to `_` in monolithic builds, may be used as a placeholder for
      provided arguments. Note: This method doesn't set the "length" property of
      curried functions.
    </div>
    <div>
      'func'의 인수를 허용하는 함수를 만들고, 적어도 'arity'개의 인수가 제공된
      경우, 결과를 반환하는 'func'를 호출하거나, 나머지 'func' 인수를 허용하는
      함수를 반환합니다. func.length가 충분하지 않으면 func의 arity를 지정할 수
      있습니다. 단일 빌드에서 '_'로 기본 설정되는 '.curry.placeholder' 값은
      제공된 인수의 자리 표시자로 사용될 수 있습니다. 참고: 이 메서드는 curried
      함수의 "length" 속성을 설정하지 않습니다.
    </div>
    <pre>
      const abc = (a: string | number, b: string | number, c: string | number) => [
        a,
        b,
        c,
      ];

      console.log(abc(1, 2, 3));
      // => [1, 2, 3]

      const curried = lodash.curry(abc);
    </pre>
    <div>curried(1)(2)(3): {{ curried(1)(2)(3) }}</div>
    <div>curried(1, 2)(3): {{ curried(1, 2)(3) }}</div>
    <div>curried(1, 2, 3): {{ curried(1, 2, 3) }}</div>
    <div>curried(1)(lodash, 3)(2): {{ curried(1)(lodash, 3)(2) }}</div>
    <div>curried(1)(lodash, 2)(3): {{ curried(1)(lodash, 2)(3) }}</div>
  </div>
  <div>
    <h4>curryRight(func, [arity=func.length])</h4>
    <div>
      This method is like `_.curry` except that arguments are applied to `func` in the manner of `_.partialRight` instead of `_.partial`.
      The `_.curryRight.placeholder` value, which defaults to `_` in monolithic builds, may be used as a placeholder for provided arguments.
      Note: This method doesn't set the "length" property of curried functions.
    </div>
    <div>
      이 method는 func에 .partialRight 대신 .partialRight 방식으로 인수를 적용하는 것을 제외하면 .curry와 같습니다.
      단일 빌드에서 '_'로 기본 설정되는 '.curryRight.placeholder' 값은 제공된 인수의 자리 표시자로 사용될 수 있습니다.
      참고: 이 메서드는 curried 함수의 "length" 속성을 설정하지 않습니다.
    </div>
    <pre>
      const abc = (a: string | number, b: string | number, c: string | number) => [
        a,
        b,
        c,
      ];

      console.log(abc(1, 2, 3));
      // => [1, 2, 3]

      const curriedRight = lodash.curryRight(abc);
    </pre>
    <div>curriedRight(1)(2)(3): {{ curriedRight(1)(2)(3) }}</div>
    <div>curriedRight(1, 2)(3): {{ curriedRight(1, 2)(3) }}</div>
    <div>curriedRight(1, 2, 3): {{ curriedRight(1, 2, 3) }}</div>
    <div>curriedRight(1)(lodash, 3)(2): {{ curriedRight(1)(lodash, 3)(2) }}</div>
    <div>curriedRight(1)(lodash, 2)(3): {{ curriedRight(1)(lodash, 2)(3) }}</div>
  </div>
  <div>
    <h4>debounce(func, [wait=0], [options={}])</h4>
    <div>
      Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed since the last time the debounced function was invoked.
      The debounced function comes with a `cancel` method to cancel delayed `func` invocations and a `flush` method to immediately invoke them.
      Provide `options` to indicate whether `func` should be invoked on the leading and/or trailing edge of the `wait` timeout.
      The `func` is invoked with the last arguments provided to the debounced function.
      Subsequent calls to the debounced function return the result of the last `func` invocation.

      Note: If `leading` and `trailing` options are `true`, `func` is invoked on the trailing edge of the timeout only if the debounced function is invoked more then once during the `wait` timeout.

      If `wait` is `0` and `leading` is `false`, `func` invocation is deferred until to the next tick, similar to `setTimeout` with a timeout of `0`.
    </div>
    <div>
      'wait' 밀리초가 지난 후에 'func'를 호출하는 것을 마지막으로 호출한 이후로 지연시키는 debounded 함수를 만듭니다.
      debounced function은 지연된 함수의 호출을 취소하는 'cancel'와 즉시 호출하는 'flush' 방식이 있습니다.
      'wait' 타임아웃의 선행 및/또는 후행 에지에서 'func'를 호출해야 하는지 여부를 나타내는 'options'를 제공합니다.
      func'는 디바운딩된 함수에 제공된 마지막 인수로 호출됩니다.
      이후 디바운딩된 함수에 대한 호출은 마지막 'func' 호출의 결과를 반환합니다.

      참고: 'leading'과 'trailing' 옵션이 'true'인 경우, 'wait' 타임아웃 중에 디바운딩된 함수가 한 번 이상 호출된 경우에만 타임아웃의 후행 에지에서 func가 호출됩니다.

      wait가 0이고 leading이 false일 경우 func 호출은 타임아웃이 0인 setTimeout과 마찬가지로 다음 체크까지 지연됩니다.
    </div>
    <pre>
      const windowSize = ref({width: window.innerWidth, height: window.innerHeight})
      window.addEventListener("resize", lodash.debounce((e: Event) => {
        windowSize.value = {
          width: (e.currentTarget as Window).innerWidth,
          height: (e.currentTarget as Window).innerHeight,
        }
      }, 150));

      const debouncedCount = ref(0);
      const handleDebouncedClick = lodash.debounce(()=> {
        debouncedCount.value++;
      }, 1000, { 'leading': true, 'trailing': false});
    </pre>
    <div>layout width: {{ windowSize.width }}, layout height: {{ windowSize.height }}</div>
    <button @click="handleDebouncedClick">debounced {{ debouncedCount }}</button>
  </div>
  <div>
    <h4>defer(func, [args])</h4>
    <div>
      Defers invoking the `func` until the current call stack has cleared.
      Any additional arguments are provided to `func` when it's invoked.
    </div>
    <div>
      현재 콜 스택이 삭제될 때까지 'func' 호출을 연기합니다.
      호출될 때 'func'에 추가 인수가 제공됩니다.
    </div>
    <pre>
      const input = "deferred";
      console.log("first", input, new Date().getTime());

      lodash.defer((text: string) => {
        console.log("second", text, new Date().getTime());
      }, input);

      console.log("third", input, new Date().getTime());
      // => first ...
      // => third ...
      // => second ...
    </pre>
  </div>
  <div>
    <h4>delay(func, wait, [args])</h4>
    <div>
      Invokes `func` after `wait` milliseconds.
      Any additional arguments are provided to `func` when it's invoked.
    </div>
    <div>
      wait 밀리초 후에 func를 호출합니다.
      호출될 때 'func'에 추가 인수가 제공됩니다.
    </div>
    <pre>
      console.log("delay", "first");

      lodash.delay((text: string) => {
        console.log("delay", "second", text);
      }, 1000, "later");

      console.log("delay", "third");
      // => delay first
      // => delay third
      // => delay second later
    </pre>
  </div>
  <div>
    <h4>flip(func)</h4>
    <div>
      Creates a function that invokes `func` with arguments reversed.
    </div>
    <div>
      인수가 반전된 'func'를 호출하는 함수를 만듭니다.
    </div>
    <pre>
      const flipped = lodash.flip(function() {
        return lodash.toArray(arguments)
      });
    </pre>
    <div>flipped('a', 'b', 'c', 'd'): {{ flipped('a', 'b', 'c', 'd') }}</div>
  </div>
  <div>
    <h4>memoize(func, [resolver])</h4>
    <div>
      Creates a function that memoizes the result of `func`. If `resolver` is provided, it determines the cache key for storing the result based on the arguments provided the memoized function.
      By default, the first argument provided to the memoized function is used as the map cache key.
      The `func` is invoked with the `this` binding of the memoized function.
    
      Note: The cache is exposed as the `cache` property on the memoized function.
      Its creation may be customized by replacing the `_.memoize.Cache` constructor with one whose instances implement the `Map` method interface of `clear`, `delete`, `get`, `has`, and `set`.
    </div>
    <div>
      func의 결과를 메모하는 함수를 생성합니다. resolver를 제공하는 경우 메모화된 함수를 제공한 인수를 기반으로 결과를 저장할 캐시 키를 결정합니다.
      기본적으로 메모화된 함수에 제공되는 첫 번째 인수가 맵 캐시 키로 사용됩니다.
      func는 memoized 함수의 this 바인딩과 함께 호출됩니다.

      참고: 캐시는 메모화된 기능에 '캐시' 속성으로 노출됩니다.
      memoize.Cache 생성자를 clear, delete, get, has, set의 맵 메소드 인터페이스를 구현하는 인스턴스로 대체하여 생성할 수 있습니다.
    </div>
    <pre>
      const flipped = lodash.flip(function() {
        return lodash.toArray(arguments)
      });
    </pre>
    <div>flipped('a', 'b', 'c', 'd'): {{ flipped('a', 'b', 'c', 'd') }}</div>
  </div>
</template>

<style scoped></style>
