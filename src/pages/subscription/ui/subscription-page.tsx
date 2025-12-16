import { SubscriptionPlans } from "@widgets/subscription-plan"

import { SectionComparePlans } from "./section-compare-plans"

export const SubscriptionPage = () => {
    return (
        <main className={"mt-[100px] flex flex-col xl:gap-[120px]"}>
            <section>
                <SubscriptionPlans />
            </section>
            <section>
                <SectionComparePlans />
            </section>
        </main>
    )
}
