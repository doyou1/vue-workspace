## vue-query sampling
- reference : https://vue-query.vercel.app/#/

### Overview
- Package migration
    - 이 패키지는 https://github.com/TanStack/query 의 일부로 마이그레이션되었습니다.

    - v1을 계속 사용하는 경우 마이그레이션 가이드에 따라 @tanstack/vue-query로 전환해야 합니다.

    - v2를 이미 사용 중인 경우 package.json과 import 문 모두에서 vue-query를 @tanstack/vue-query로 스왑하면 됩니다. 모든 것이 이전과 동일하게 작동합니다.

- Overview
    - Vue Query 패키지는 Vue에서 비동기 데이터를 가져오고 캐싱하고 업데이트하기 위한 후크를 제공합니다.

    - Vue 2.x 및 3.x 지원은 Vue-demi 패키지를 통해 제공됩니다

    - 리액트 쿼리 기준. 메인 패키지에서 모든 메인 컨셉이 상속됩니다. 리액트 쿼리 문서도 확인 부탁드립니다

- Motivation
    - Vue는 서버 데이터와 의견을 제시하는 상호작용 방식을 제공하지 않습니다. 따라서 개발자들은 지나치게 복잡하거나 기능이 부족하거나 이러한 용도로 설계되지 않은 글로벌 상태 관리 라이브러리를 사용하는 경향이 있는 맞춤형 솔루션을 구축하게 됩니다.
    - 대부분의 전통적인 상태 관리 라이브러리들은 클라이언트 상태와 함께 작업하는 것은 좋지만, 비동기나 서버 상태와 함께 작업하는 것은 능숙하지 않습니다. 서버 상태가 완전히 다르기 때문입니다. 우선, 서버 상태:
        - 사용자가 제어하지 않거나 소유하지 않은 위치에서 원격으로 유지됨
        - 가져오기 및 업데이트를 위해 비동기 API 필요
        - 공유 소유권을 의미하며 사용자가 모르는 사이에 다른 사용자가 변경할 수 있음
        - 신중하지 않으면 애플리케이션에서 잠재적으로 "오래된" 상태가 될 수 있습니다
    - 애플리케이션의 서버 상태 특성을 파악하면 다음과 같은 문제가 더 많이 발생합니다:
         - 캐싱... (프로그래밍에서 가장 어려운 일일 수도 있습니다)
         - 동일한 데이터에 대한 여러 요청을 단일 요청으로 중복 제거
         - 백그라운드에서 "오래된" 데이터 업데이트
         - 데이터가 "오래된" 시점 파악
         - 데이터 업데이트를 최대한 신속하게 반영
         - 페이지화 및 데이터 지연 로딩과 같은 성능 최적화
         - 서버 상태의 메모리 및 가비지 컬렉션 관리
         - 구조적 공유로 쿼리 결과 메모하기

    - 이 목록에 압도되지 않았다면 서버 상태 문제를 이미 모두 해결했을 것이고 상을 받을 자격이 있을 것입니다. 하지만 대부분의 사람들처럼 아직 이러한 문제를 모두 해결하지 못했거나 대부분의 문제를 해결하지 못한 채 겉만 보고 있는 것입니다!

    - 뷰 쿼리는 서버 상태를 관리하기 위한 최고의 라이브러리 중 하나입니다. 제로 구성으로 즉시 사용할 수 있으며 애플리케이션이 커짐에 따라 원하는 대로 사용자 지정할 수 있습니다.

    - 뷰 쿼리를 사용하면 서버 상태의 까다로운 문제와 장애물을 극복하고 제어를 시작하기 전에 앱 데이터를 제어할 수 있습니다.

    - 좀 더 기술적인 참고 사항으로 뷰 쿼리는 다음과 같습니다:
        - 응용프로그램에서 복잡하고 잘못 이해된 코드의 많은 줄을 제거하고 뷰 쿼리 로직의 몇 줄만으로 대체할 수 있도록 도와줍니다.
        - 새로운 서버 상태 데이터 소스를 배선할 염려 없이 애플리케이션을 보다 안정적으로 유지하고 새로운 기능을 쉽게 구축할 수 있습니다
        - 애플리케이션이 그 어느 때보다 빠르고 응답성이 높아지도록 함으로써 최종 사용자에게 직접적인 영향을 미칩니다.
        - 대역폭을 절약하고 메모리 성능을 높이는 데 잠재적으로 도움이 됩니다

- Installation
> npm install vue-query

- Using `VueQueryPlugin` (recommended)
> import { VueQueryPlugin } from "vue-query";

> app.use(VueQueryPlugin);

- Use of Composition API with `<script setup>`
```javascript
<script setup>
import { defineComponent } from "vue";
import { useQuery } from "vue-query";

const useTodosQuery = () => useQuery("todos", fetchTodoList);

const { isLoading, isError, data, error, isFecthing } = useTodosQuery();
</script>
```

### TypeScript
Vue Query는 라이브러리와 프로젝트가 안전한지 확인하기 위해 TypeScript로 작성됩니다!

주의해야 할 사항:
- 현재 필요한 TypeScript 버전이 v4.1 이상입니다.
- 이 리포지토리의 유형 변경은 중단되지 않은 것으로 간주되며 일반적으로 패치 서버 변경으로 릴리스됩니다(그렇지 않으면 모든 유형 향상이 주요 버전이 됩니다!).
- vue-query 패키지 버전을 특정 패치 릴리스에 고정하고 모든 릴리스 간에 유형이 수정 또는 업그레이드될 수 있음을 예상하여 업그레이드하는 것이 좋습니다
- Vue Query의 비타입 관련 공개 API는 여전히 sember를 매우 엄격하게 따릅니다.

### Important Defaults
- Vue Query는 공격적이지만 정상적인 기본값으로 구성되어 있습니다. 때때로 이러한 기본값은 사용자가 모르는 경우 새로운 사용자의 허를 찌르거나 학습/디버깅을 어렵게 만들 수 있습니다.

Vue Query를 계속해서 배우고 사용할 때 이 내용을 기억해야 합니다:
    - `useQuery`를 통해 인스턴스를 쿼리하거나 기본적으로 `useInfiniteQuery`를 사용하여 캐시된 데이터를 오래된 것으로 간주합니다.

> 이 동작을 변경하려면 `staleTime` 옵션을 사용하여 쿼리를 전역 및 쿼리별로 구성할 수 있습니다. `staleTime을` 더 길게 지정하면 쿼리가 데이터를 자주 다시 불러오지 않음을 의미합니다

오래된 쿼리는 다음과 같은 경우 백그라운드에서 자동으로 재패치됩니다:
     - 쿼리 마운트의 새 인스턴스
     - 창에 다시 초점이 맞춰집니다
     - 네트워크가 다시 연결되었습니다.
     - 쿼리는 선택적으로 refetch 간격으로 구성됩니다.

- 예상하지 못한 재패치를 보게 되면 방금 창에 포커스를 맞췄는데 뷰 쿼리가 `refetchOnWindowFocus`를 하고 있기 때문일 가능성이 높습니다. 개발 중에는 특히 브라우저 데브툴과 앱 사이에 포커스를 맞추면 패치도 발생하기 때문에 이 문제가 더 자주 트리거될 수 있습니다.

    > 이 기능을 변경하려면 `refetchOnMount`, `refetchOnWindowFocus`, `refetchOnReconnect` 및 `refetchInterval`과 같은 옵션을 사용할 수 있습니다.

- `useQuery`, `useInfiniteQuery` 또는 쿼리 관찰자가 더 이상 활성 인스턴스가 없는 쿼리 결과는 "비활성"으로 레이블이 지정되며 나중에 다시 사용할 경우 캐시에 남아 있습니다.
- 기본적으로 "비활성" 쿼리는 5분 후에 수집된 가비지입니다.

    > 이를 변경하려면 쿼리의 기본 `cacheTime`을 `1000 * 60 * 5`밀리초가 아닌 다른 것으로 변경할 수 있습니다.

- 실패한 쿼리는 자동으로 3번 재시도되고 기하급수적인 백오프 지연이 발생한 후 UI에 오류를 캡처하여 표시합니다.
    > 이를 변경하려면 쿼리에 대한 기본 `retry` 및 `retryDelay` 옵션을 3이 아닌 다른 것과 기본 지수 백오프 함수로 변경할 수 있습니다.

- 쿼리 결과는 기본적으로 구조적으로 공유되어 데이터가 실제로 변경되었는지 여부를 감지하고 그렇지 않은 경우 데이터 참조는 변경되지 않고 그대로 유지되어 가치 안정화에 더 도움이 됩니다. 이 개념이 이질적으로 들린다면 걱정하지 마십시오! 99.9%의 경우 이를 비활성화할 필요가 없으며 이를 통해 제로 비용으로 앱 성능을 향상시킬 수 있습니다.
    > 구조 공유는 JSON 호환 값에서만 작동하므로 다른 값 유형은 항상 변경된 것으로 간주됩니다. 예를 들어 큰 응답 때문에 성능 문제가 발생하는 경우 `config.structuralSharing` 플래그를 사용하여 이 기능을 사용하지 않도록 설정할 수 있습니다. 쿼리 응답에서 JSON 호환되지 않는 값을 처리하는 경우에도 데이터가 변경되었는지 여부를 탐지하려는 경우 `config.isDataEqual`로 데이터 비교 함수를 정의할 수 있습니다.

### Queries
- 쿼리는 고유한 키에 연결된 데이터의 비동기 소스에 대한 선언적 종속성입니다. 쿼리는 서버에서 데이터를 가져오는 데 모든 Promise 기반 메서드(GET 및 POST 메서드 포함)와 함께 사용할 수 있습니다. 메서드가 서버의 데이터를 수정하는 경우 대신 Mutations를 사용하는 것이 좋습니다.

- 구성요소 또는 사용자 정의 후크에서 쿼리를 구독하려면 다음과 같은 내용으로 `useQuery` 후크를 호출합니다:
    - 쿼리에 대한 고유 키
    - 다음과 같은 약속을 반환하는 함수:
        - 데이터를 해결합니다
        - 오류를 던집니다

- 제공하는 고유 키는 내부적으로 응용프로그램 전체에서 쿼리를 다시 불러오고 캐싱하고 공유하는 데 사용됩니다.

- `useQuery`에 의해 반환되는 쿼리 결과에는 템플릿 작성에 필요한 쿼리에 대한 모든 정보와 데이터의 기타 용도가 포함됩니다:

```javascript
const result = useQuery("todos", fetchTodoList);
```

- `result` 개체에는 생산성을 높이기 위해 주의해야 할 몇 가지 매우 중요한 상태가 포함되어 있습니다. 쿼리는 특정 순간에만 다음 상태 중 하나에 있을 수 있습니다:
    - `isLoading` or `status === loading` - 쿼리에 데이터가 없으며 현재 가져오는 중입니다
    - `isError` 또는 `status === error` - 쿼리에 오류가 발생했습니다
    - `isSuccessor` `status === success` - 쿼리가 성공했으며 데이터를 사용할 수 있습니다
    - `isIdle` or `status === idle` - 현재 쿼리가 비활성화되어 있습니다(자세한 내용은 잠시 후에 확인하실 수 있습니다)

- 기본 상태 이외에도 쿼리의 상태에 따라 더 많은 정보를 사용할 수 있습니다:

     - `error` - 쿼리가 `isError` 상태인 경우 `error` 속성을 통해 오류를 사용할 수 있습니다.
     - `data` - 쿼리가 `success` 상태이면 데이터 속성을 통해 데이터를 사용할 수 있습니다.
     - `isFetching` - 임의의 상태에서 쿼리가 언제든지 가져오기 중이면(배경 재페칭 포함) `isFetching`은 `true`가 됩니다.

> `result` 개체의 모든 속성은 `ref`로 감싸므로 반응성을 유지하면서 안전하게 구조화할 수 있습니다.

- 대부분의 쿼리의 경우 `isLoading` 상태를 확인한 다음 `isError` 상태를 확인한 다음 마지막으로 데이터를 사용할 수 있다고 가정하고 성공 상태를 렌더링하면 됩니다:

```javacsript
<script setup>
import { useQuery } from "vue-query";

function useTodosQuery() {
    return useQuery("todos", fetchTodoList);
}

const { isLoading, isError, data, error } = useTodoQuery();
</script>

<template>
  <span v-if="isLoading">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <!-- We can assume by this point that `isSuccess === true` -->
  <ul v-else>
    <li v-for="todo in data" :key="todo.id">{{ todo.title }}</li>
  </ul>
</template>
```

### Query Keys
- Vue Query는 핵심적으로 쿼리 키를 기반으로 쿼리 캐싱을 관리합니다. 쿼리 키는 문자열처럼 단순할 수도 있고, 수많은 문자열과 중첩된 개체의 배열처럼 복잡할 수도 있습니다. 쿼리 키가 직렬화 가능하고 쿼리 데이터에 고유한 것이라면 사용할 수 있습니다!

- String-Only Query Keys
    - 가장 간단한 형태의 키는 배열이 아니라 개별 문자열입니다. 문자열 쿼리 키가 전달되면 내부적으로 문자열을 쿼리 키의 유일한 항목으로 하는 배열로 변환됩니다. 이 형식은 다음과 같은 경우에 유용합니다:
        - 일반 목록/인덱스 리소스
        - 비계층적 리소스

```javascript
// A list of todos
useQuery('todos', ...) // queryKey === ['todos']

// Somthing else, whatever!
useQuery('somethingSpecial', ...) // queryKey == ['somethingSpecial']
```

- Array Keys
    - 쿼리가 데이터를 고유하게 설명하기 위해 더 많은 정보가 필요한 경우 문자열과 임의의 수의 직렬화 가능한 개체가 있는 배열을 사용하여 쿼리를 설명할 수 있습니다. 이는 다음과 같은 경우에 유용합니다:
    - 계층적 리소스 또는 중첩 리소스
        - 아이템을 고유하게 식별하기 위해 ID, 인덱스 또는 기타 프리미티브를 전달하는 것이 일반적입니다
    - 추가 매개 변수가 있는 쿼리
        - 추가 옵션의 개체를 전달하는 것이 일반적입니다

```javascript
// An individual todo
useQuery(['todo', 5], ...)
// queryKey === ['todo', 5]

// And individual todo in a "preview" format
useQuery(['todo', 5, { preview: true }], ...)

// A list of todos that are "done"
useQuery(['todos', { type: done }], ...)
// queryKey === ['todos', { type: 'done' }]
```

> 쿼리 키 매개 변수가 동일한 구성 요소에서 시간이 지남에 따라 변경될 경우, 계산된 값에 대한 `ref`(참조)로 모든 쿼리 키 매개 변수를 전달합니다.

```javascript
const id = ref(5);
useQuery(['todo', id], ...)
```

- Query Keys are hashed deterministically!(쿼리 키는 결정적으로 해시됩니다!)
    - 즉, 개체의 키 순서에 상관없이 다음 쿼리는 모두 동일한 것으로 간주됩니다:
    ```javascript
    useQuery(['todos', { status, page }], ...)
    useQuery(['todos', { page, status }], ...)
    useQuery(['todos', { page, status, other: undefined }], ...)
    ```

    - 그러나 다음 쿼리 키는 같지 않습니다. 배열 항목 순서가 중요합니다!
    ```javascript
    useQuery(['todos', status, page], ...)
    useQuery(['todos', page, status], ...)
    useQuery(['todos', undefined, page, status], ...)
    ```

- If your query function depends on a variable, include it in your query key(쿼리 함수가 변수에 의존하는 경우 쿼리 키에 포함)
    - 쿼리 키는 가져오는 데이터를 고유하게 설명하기 때문에 쿼리 함수에 사용하는 변수가 변경되는 것을 포함해야 합니다. 예를 들어 다음과 같습니다:
    ```javascript
    function useTodos(todoId) {
        const queryKey = ["todos", todoId];
        const result = useQuery(queryKey, () => fetchTodoById(todoId.value));
    }
    ```

### Query Functions
> Vue 반응성 시스템의 일반적인 함정을 피하기 위해 queryKey 변수에 대해 먼저 읽어보시기 바랍니다.

- 쿼리 함수는 말 그대로 `returns a promise` 모든 함수가 될 수 있습니다. 반환되는 promise는 `resolve the data`하거나 `throw an error`시킵니다.

- 다음은 모두 유효한 쿼리 함수 구성입니다:

```javascript
useQuery(['todos'], fetchAllTodos);
useQuery(['todos', todoId], () => fetchTodoById(todoId));
useQuery(['todos', todoId], async () => {
    const data = await fetchTodoById(todoId);
    return data;
});
useQuery(['todos', todoId], ({ queryKey }) => fetchTodoById(queryKey[1]));
```

- Handling and Throwing Errors
    - Vue Query가 쿼리에 오류가 발생했다고 판단하려면 쿼리 함수가 던져야 합니다. 쿼리 함수에 던진 오류는 쿼리의 `error` 상태에 지속됩니다.

    ```javascript
    const { error } = useQuery(['todos', todoId], async () => {
        if (somethingGoesWrong) {
            throw new Error('Oh no!');
        }

        return data;
    });
    ```

- Usage with fetch and other clients that do not throw by default(기본적으로 던지지 않는 fetch 및 기타 클라이언트에서의 사용)
    - `axios`나 `graphql-request`와 같은 대부분의 유틸리티는 실패한 HTTP 호출에 대해 자동으로 오류를 생성하지만, `fetch`와 같은 일부 유틸리티는 기본적으로 오류를 생성하지 않습니다. 이 경우 사용자가 직접 오류를 생성해야 합니다. 인기 있는 `fetch` API를 사용하여 간단한 방법은 다음과 같습니다:
    ```javascript
    useQuery(['todos', todoId], async () => {
        const response = await fetch('/todos/' + todoId);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
    ```

- Query Function Variables
    - 쿼리 키는 가져올 데이터를 고유하게 식별하기 위한 것일 뿐만 아니라 쿼리 기능에 편리하게 전달됩니다. 이를 통해 필요한 경우 쿼리 기능을 추출할 수 있습니다:
    ```javascript
    function useTodos(status, page) {
        const result = useQuery(['todos', { status, page }], fetchTodoList);
    }

    // Access the key, status and page variables in your query function!
    // 쿼리 기능의 키, 상태 및 페이지 변수에 액세스할 수 있습니다!
    function fetchTodoList({ queryKey }) {
        const status = queryKey[1].status;
        const page = queryKey[1].page;
        return new Promise();
    }
    ```

- Using a Query Object instead of parameters
    - `[queryKey, queryFn, config]` 서명이 VueQuery의 API를 통해 지원되는 모든 위치에서 개체를 사용하여 동일한 구성을 표현할 수도 있습니다:
    ```javascript
    import { useQuery } from 'vue-query';

    useQuery({
        queryKey: ['todo', 7],
        queryFn: fetchTodo,
        ...config,
    });
    ```

### Parallel Queries
- "병렬" 쿼리는 동시에 가져오기를 최대화하기 위해 병렬로 또는 동시에 실행되는 쿼리입니다.

- Manual Parallel Queries
    - 병렬 쿼리의 수가 변경되지 않을 때는 병렬 쿼리를 사용하기 위한 추가적인 노력이 없습니다. 뷰 쿼리의 임의의 수의 `useQuery`와 `useInfiniteQuery` 후크를 나란히 사용하면 됩니다!
    ```javascript
    // The following queries will execute in parallel
    const usersQuery = useQuery('users', fetchUsers);
    const teamsQuery = useQuery('teams', fetchTeams);
    const projectsQuery = useQuery('projects', fetchProjects);
    ```
    > 서스펜스 모드에서 뷰 쿼리를 사용할 때, 첫 번째 쿼리는 다른 쿼리가 실행되기 전에 설치 기능을 일시 중단하기 때문에 이러한 병렬 방식은 작동하지 않습니다. 이 문제를 해결하려면 `useQueries` 후크(제안됨)를 사용하거나 각 `useQuery` 인스턴스에 대해 별도의 구성 요소로 자신의 병렬 방식을 조정해야 합니다(레임).

- Dynamic Parallel Queries with `useQueries`
    - 실행해야 하는 쿼리의 수가 구성 요소의 수명에 걸쳐 변경되는 경우 수동 쿼리를 사용할 수 없습니다. 이는 `<script setup>` 또는 `setup()` 함수에서 동기적으로 실행되어야 하므로 합성 가능 규칙에 위배되므로 수동 쿼리를 사용할 수 없습니다. 대신 뷰 쿼리는 `useQueries` 후크를 제공하여 원하는 만큼의 쿼리를 병렬로 동적으로 실행할 수 있습니다.

    - `useQueries`는 쿼리 옵션 개체의 배열을 허용하고 쿼리 결과의 반응형 배열을 반환합니다:
    ```javascript
    const users = computed(...)
    const usersQueriesOptions = computed(() => users.value.map(user => {
        return {
            queryKey: ['user', user.id],
            queryFn: () => fetchUserById(user.id);
        }
    }));

    const userQueries = useQueries(usersQueriesOptions);
    ```

### Dependent Queries(종속 쿼리)
- 종속(또는 직렬) 쿼리는 실행하기 전에 완료할 이전 쿼리에 따라 결정됩니다. 이렇게 하려면 실행할 준비가 되었을 때 `enabled` 옵션으로!
```javascript
// Main Query - get the user
function useUserQuery(email) {
    return useQuery(['user', email], () => getUserByEmail(email.value));
}

// Dependant query - get the user's projects
function useUserProjectsQuery(userId, { enabled }) {
    return useQuery(['projects', userId], () => getProjectsByUser(userId.value), {
        enabled, // The query will not execute until `enabled === true`
    });
}

// Get the user
const { data: user } = useUserQuery(email);

const userId = computed(() => user.value?.id);
const enabled = computed(() => !!user.value?.id);

// Then get the user's projects
const { isIdle, data: projects } = useUserProjectsQuery(userId, { enabled });

// isIdle will be `true` until `enabled` is true and the query begins to fetch.
// It will then go the `isLoading` stage and hopefully the `isSuccess` stage :)
// isIdle은 'enabled'가 true이고 쿼리가 가져오기 시작할 때까지 'true'가 됩니다.
// 그러면 isLoading 단계가 되고 isSuccess 단계가 되기를 바랍니다 :)
```

