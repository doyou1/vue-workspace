<template>
    <BasicLayout :theme="'blue'">
        <div class="navigation">
            <div class="navigation__sub-menu">
                <div class="navigation__sub-menu__button-box">
                    <BasicButton v-for="item in topMenu" :key="item.label" :data="item"/>
                </div>
            </div>
            <div class="navigation__sub-menu">
                <span class="navigation__sub-menu__title">Recruitment</span>
                <div class="navigation__sub-menu__button-box">
                    <BasicButton v-for="item in middleMenu" :key="item.label" :data="item"/>
                </div>
            </div>
            <div class="navigation__sub-menu">
                <span class="navigation__sub-menu__title">Organization</span>
                <div class="navigation__sub-menu__button-box">
                    <BasicButton v-for="item in bottomMenu" :key="item.label" :data="item"/>
                </div>
            </div>
        </div>
    </BasicLayout>
</template>

<script setup lang="ts" >
import BasicLayout from '@/components/atoms/layout/BasicLayout.vue';
import BasicButton from '@/components/atoms/button/BasicButton.vue';
import { computed } from 'vue';

const menus = [
    {
        icon: 'Dashboard',
        label: 'Dashboard',
    },
    {
        icon: 'Calendar',
        label: 'Calendar',
    },
    {
        icon: 'Jobs',
        label: 'Jobs',
    },
    {
        icon: 'Reference',
        label: 'Reference',
    },
    {
        icon: 'Employee',
        label: 'Employee',
    },
    {
        icon: 'Structure',
        label: 'Structure',
    },
]

const topMenu = computed(() => (menus.slice(0, 2)))
const middleMenu = computed(() => (menus.slice(2, 4)))
const bottomMenu = computed(() => (menus.slice(4, 6)))

</script>

<style lang="scss" scoped>
.navigation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 100%;
    gap: 40px;
    color: $color-white-100;


    &__sub-menu {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        &__title {
            margin-bottom: 12px;

            font-family: 'SUITE-Regular';
        }
        &__button-box {
            width: calc(100% - 24px);
        }
    }
}
</style>