import { Button, Pagination, Table } from "flowbite-react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface IProps {
    data: any
    isCompanyTable: boolean
    isContactTable: boolean
}

const SimilarIndustrySearchResult: FC<IProps> = function (props): JSX.Element {
    const [currentPage, setCurrentPage] = useState(1)
    const pageLength = 10
    const [data, setData] = useState(Array.isArray(props.data) ? props.data.slice((currentPage - 1) * pageLength,((currentPage - 1) * pageLength) + pageLength) : [])
    useEffect(() => {
        setData(props.data.slice((currentPage - 1) * pageLength, ((currentPage - 1) * pageLength) + pageLength))
    },[currentPage])

    return (
        <div>
            <div className="px-5 text-light mb-10">
                <h2 className="text-4xl text-[#585757] mb-3">
                    Search Internet Stores, Data Centers & Export Companies
                </h2>
                <p className="text-xl mb-3">Lead Generation and Sales Prospecting Made Easy</p>
                <p className="text-lg mb-3 text-[#666262]">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>

            <div className="result-table p-[25px] bg-[#F4F4F4] rounded-2xl">
                <div className="bg-white mb-[22px] text-normal text-xl rounded-2xl">
                    <Table className="bg-white rounded-2xl">
                        <Table.Head className="!bg-white text-[#696666] text-xl text-normal" style={{ textTransform: 'capitalize' }}>
                            <Table.HeadCell className="py-[25px] font-normal w-[200px]">
                                {
                                    props.isCompanyTable &&
                                    "Company Name"
                                }
                                {
                                    props.isContactTable &&
                                    "Person Name"
                                }
                            </Table.HeadCell>
                            <Table.HeadCell className="py-[25px] font-normal">
                                {
                                    props.isCompanyTable &&
                                    "Industry"
                                }
                                {
                                    props.isContactTable &&
                                    "Designation"
                                }
                            </Table.HeadCell>
                            <Table.HeadCell className="py-[25px] font-normal">
                                Location
                            </Table.HeadCell>
                            <Table.HeadCell className="py-[25px] w-[180px] font-normal">
                                {/* {
                                    props.isCompanyTable &&
                                    "Employees"
                                } */}
                                {/* {
                                    props.isContactTable &&
                                    "Employees"
                                } */}
                            </Table.HeadCell>
                            <Table.HeadCell className="py-[25px] font-normal w-[150px]">

                            </Table.HeadCell>
                        </Table.Head>
                    </Table>
                </div>

                <Table className="rounded-2xl">
                    <Table.Body>
                        {
                            data?.map((item) => {
                                return <Table.Row className="bg-white pb-5" key={item.id}>
                                    <Table.Cell className="whitespace-nowrap font-medium text-xl text-normal">
                                        {item?.name}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <p className="text-[#696666] text-xl text-normal">
                                        {
                                            props.isCompanyTable &&
                                            item?.industry
                                        }
                                        {
                                            props.isContactTable &&
                                            item?.designation
                                        }
                                        </p>
                                        {/* <p className="text-primary-purple-color text-lg">
                                            Data Export
                                        </p> */}
                                    </Table.Cell>
                                    <Table.Cell className="text-light text-lg">
                                        {
                                            item.location
                                        }
                                        {/* United States */}
                                        {/* <span className="text-primary-purple-color ml-2">
                                            Arkansas Bentonville
                                        </span> */}
                                    </Table.Cell>
                                    <Table.Cell className="text-[#585757]">
                                        {/* {
                                            props.isCompanyTable &&
                                            <>
                                                 <p className="text-xl">
                                                    {item.employeeCount}
                                                </p>
                                                <p className="text-sm">
                                                    Employees
                                                </p>
                                            </>
                                        } */}
                                        {/* {
                                            props.isContactTable &&
                                            item?.designation
                                        } */}
                                    </Table.Cell>
                                    <Table.Cell className="">
                                        {
                                            props.isCompanyTable &&
                                            <Link href={`/company/${item.id}`}>
                                                <Button className="primary-button py-1 !px-0 text-sm w-[140px]">
                                                    Add to favourite
                                                </Button>
                                            </Link>
                                        }
                                        {
                                            props.isContactTable && item.linkedinName &&
                                            <Link href={`/contact/${item.linkedinName}`}>
                                                <Button className="primary-button py-1 !px-0 text-sm w-[140px]">
                                                    Add to favourite
                                                </Button>
                                            </Link>
                                        }
                                    </Table.Cell>
                                </Table.Row>
                            })
                        }
                    </Table.Body>
                </Table>
            </div>
            {
                props.data?.length / pageLength > 1 &&
                <Pagination
                    className="my-[50px] text-center"
                    currentPage={currentPage}
                    onPageChange={(e) => setCurrentPage(e)}
                    showIcons={true}
                    totalPages={props.data?.length / pageLength}
                    nextLabel=""
                    previousLabel=""
                />
            }
        </div>
    )
}

export default SimilarIndustrySearchResult
