import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngMap: NextPageWithLayout = () => {
    return (
        <div>
            MngMap
        </div>
    )
}

MngMap.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngMap