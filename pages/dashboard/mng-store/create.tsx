import { CreateStoreComponent } from "@/components/dashboard/mng-store/CreateStoreComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const CreateStore: NextPageWithLayout = () => {
    return (
        <div>
            <CreateStoreComponent />
        </div>
    )
}

CreateStore.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default CreateStore