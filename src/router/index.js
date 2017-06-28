import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'
import main from '@/components/home/main.vue'
import projects from '@/components/home/projects.vue'
import automation from '@/components/home/automation.vue'
import catalog from '@/components/home/catalog.vue'
import page404 from '@/components/page404.vue'

import ddbsMain from '@/components/home/ddbs/ddbsMain.vue'
import overview from '@/components/home/ddbs/overview.vue'
import flow from '@/components/home/ddbs/flow.vue'
import datasets from '@/components/home/ddbs/datasets.vue'
import analysis from '@/components/home/ddbs/analysis.vue'
import notebooks from '@/components/home/ddbs/notebooks.vue'
import jobs from '@/components/home/ddbs/jobs.vue'
import dashboards from '@/components/home/ddbs/dashboards.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '',
        name: 'main',
        component: main,
        children: [{
            path: 'projects',
            alias: '/',
            component: projects
        }, {
            path: 'automation',
            component: automation
        }, {
            path: 'catalog',
            component: catalog
        }]
    }, {
        path: '/ddbs/:project_name/',
        name: 'ddbs',
        component: ddbsMain,
        children: [{
            path: 'overview',
            alias: '/',
            component: overview
        }, {
            path: 'flow',
            component: flow
        }, {
            path: 'datasets',
            component: datasets
        }, {
            path: 'datasets',
            component: datasets
        }, {
            path: 'analysis',
            component: analysis
        }, {
            path: 'notebooks',
            component: notebooks
        }, {
            path: 'jobs',
            component: jobs
        }, {
            path: 'dashboards',
            component: dashboards
        }]
    }, {
        path: '/login',
        name: 'login',
        component: login
    }, {
        path: '/404',
        name: 'page404',
        component: page404
    }, {
        path: '*',
        redirect: '/404'
    }]
})
