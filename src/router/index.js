import Vue from "vue";
import Router from "vue-router";
import DeliveryForm from "../components/DeliveryForm";
import SubmissionFail from "../components/SubmissionFail.vue";
import SubmissionSuccess from "../components/SubmissionSuccess.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "DeliveryForm",
      component: DeliveryForm
    },
    {
      path: "/thanks",
      name: "success",
      component: SubmissionSuccess
    },
    {
      path: "/404",
      name: "fail",
      component: SubmissionFail
    }
  ]
});

export default router;
