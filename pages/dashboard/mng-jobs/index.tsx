import ConfirmModal from "@/components/includes/ConfirmModal";
import CustomizedTable from "@/components/includes/dataTable/DataTable";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { JobsColumns } from "../../../utils/columns";
import { fakeJobs, personImgs } from "@/utils/fakeDatas";
import { Button, Card, CardBody, CardFooter, Spinner } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import Image from "next/image";
import { SkillComponent } from "@/components/includes/SkillComponents";

const JobsList: NextPageWithLayout = () => {
  fakeJobs.map((ele: any) => {
    console.log(ele.category.name);
  });
  const router = useRouter();
  const handleSelected = ({ row }: any) => {};
  const ProgressComponent = <Spinner />;
  const ExpandedComponent = ({ data }: any) => (
    <div>
      <Card>
        <CardBody className="grid gap-8 items-center">
          <div className="flex flex-row gap-8 items-center">
            <div className="w-12 h-12">
              <Image src={personImgs.personImg1} className="rounded-full"></Image>
            </div>
            <div>{data.user.firstName + " " + data.user.lastName}</div>
          </div>
          <div>Contact Info : {data.user.email}</div>
          <div>Description: {data.description}</div>
          <div>Created At: {data.user.createdAt}</div>
          <div className="flex">
            Skills: <SkillComponent data={data.skill} />
          </div>
        </CardBody>
        <CardFooter>
          <div className="flex justify-end">
            <Button>More Detail</Button>
          </div>
        </CardFooter>
      </Card>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );

  const [selectedRows, setSelectedRows] = useState<any>([]);

  const handleChange = ({ selectedRows }: any) => {
    setSelectedRows(selectedRows);
  };

  const handlerDelete = () => {
    selectedRows.length === 0 && alert("Select records");
    selectedRows.length > 0 && setOpen(true);
  };

  const handlerEdit = () => {
    selectedRows.length === 1 &&
      router.push({
        pathname: "/dashboard/mng-user/edit",
        query: {
          id: selectedRows[0].id,
        },
      });
    selectedRows.length !== 1 && alert("Select one record!");
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const deleteRecordAction = () => {
    setOpen(false);
    // TODO DELETE ACTION
  };

  return (
    <div>
      <div>
        <Button onClick={handlerEdit}>Edit</Button>
        <Button color="red" onClick={handlerDelete}>
          Delete
        </Button>
      </div>
      <CustomizedTable
        data={fakeJobs}
        columns={JobsColumns}
        handleSelected={handleSelected}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        ProgressComponent={ProgressComponent}
        onSelectedRowsChange={handleChange}
      />
      <ConfirmModal
        open={open}
        handleOpen={handleOpen}
        onConfirm={deleteRecordAction}
      />
    </div>
  );
};

JobsList.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default JobsList;
