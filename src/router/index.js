import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorView from "@/views/ErrorView.vue";
import RegistrationAssociationView from "@/views/RegistrationAssociationView.vue";
import ConsumptionView from "@/views/ConsumptionView.vue";
import ConversationView from "@/views/ConversationView.vue";
import NewsView from "@/views/NewsView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import PriceView from "@/views/PriceView.vue";
import AssociationView from "@/views/AssociationView.vue";
import AssociationEnterView from "@/views/AssociationEnterView.vue";

const routes = [
    {
        path: '/homepage',
        name: 'home',
        component: HomeView
    },
    {
        path: '/error',
        name: 'errorRoute',
        component: ErrorView
    },
    {
        path: '/registration',
        name: 'registrationRoute',
        component: RegistrationAssociationView
    },
    {
        path: '/consumption',
        name: 'consumptionRoute',
        component: ConsumptionView
    },
    {
        path: '/conversation',
        name: 'conversationRoute',
        component: ConversationView
    },
    {
        path: '/news',
        name: 'newsRoute',
        component: NewsView
    },
    {
        path: '/price',
        name: 'priceRoute',
        component: PriceView
    },
    {
        path: '/about',
        name: 'aboutRoute',
        component: AboutView
    },
    {
        path: '/contact',
        name: 'contactRoute',
        component: ContactView
    },
    {
        path: '/association-enter',
        name: 'associationEnterRoute',
        component: AssociationEnterView
    },
    {
        path: '/association',
        name: 'associationRoute',
        component: AssociationView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
