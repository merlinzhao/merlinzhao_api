import { TrainlineController } from "./controller/TrainlineController"


export const Routes = [{
    method: "get",
    route: "/trainlines",
    controller: TrainlineController,
    action: "allTrainlines"
}
]