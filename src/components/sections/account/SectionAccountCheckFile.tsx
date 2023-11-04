import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import { Select } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

function SectionAccountCheckFile({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionAccountCheckFile mt-[30px]`}>
				<h3 className="bg-main mb-[16px] !bg-clip-text font-Bebas text-[32px] font-medium text-transparent">
					Document upload
				</h3>
				<div className="mb-[30px] space-y-[10px]">
					<p className="font-bold">Travel Document</p>
					<div className="mx-[-8px] flex mb:flex-col mb:space-y-[10px]">
						<div className="c1 w-[75%] space-y-[10px] px-[8px] mb:w-full">
							<div className="flex items-center">
								<p className="w-[82px] whitespace-nowrap">Document type</p>
								<div className="w-[calc(100%-82px)] pl-[16px]">
									<input type="text" className="cusInput" placeholder="BiMeow" />
								</div>
							</div>
							<div className="flex items-center">
								<p className="w-[82px] whitespace-nowrap">Description</p>
								<div className="w-[calc(100%-82px)] pl-[16px]">
									<Select
										className="cusSelect"
										defaultValue="lucy"
										onChange={(e) => console.log("selected", e)}
										options={[
											{ value: "jack", label: "Jack" },
											{ value: "lucy", label: "Lucy" },
											{ value: "Yiminghe", label: "yiminghe" },
										]}
										suffixIcon={<CaretDownOutlined />}
									/>
								</div>
							</div>
						</div>

						<div className="c2 w-[25%] space-y-[10px] px-[8px] mb:w-full">
							<div className="mx-[-8px] flex">
								<div className="w-1/2 px-[8px]">
									<div className="bg-main w-full cursor-pointer rounded-[32px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
										<div className=" h-[23px] rounded-[30px] bg-[#14171C] px-[16px] py-[2px] text-center text-[14px] leading-[1.4] duration-300 hover:bg-purple">
											Select File
										</div>
									</div>
								</div>
								<div className="w-1/2 px-[8px]">
									<div className="bg-main w-full cursor-pointer rounded-[32px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
										<div className=" h-[23px] rounded-[30px] bg-[#14171C] px-[16px] py-[2px] text-center text-[14px] leading-[1.4] duration-300 hover:bg-purple">
											Add
										</div>
									</div>
								</div>
							</div>

							<p className="pl-[5px]">0 file selected</p>
						</div>
					</div>
				</div>

				<div className="mb-[30px] space-y-[10px]">
					<p className="font-bold">Travel Document</p>
					<div className="mx-[-8px] flex mb:flex-col mb:space-y-[10px]">
						<div className="c1 w-[75%] space-y-[10px] px-[8px] mb:w-full">
							<div className="flex items-center">
								<p className="w-[82px] whitespace-nowrap">Document type</p>
								<div className="w-[calc(100%-82px)] pl-[16px]">
									<Select
										className="cusSelect"
										defaultValue="lucy"
										onChange={(e) => console.log("selected", e)}
										options={[
											{ value: "jack", label: "Jack" },
											{ value: "lucy", label: "Lucy" },
											{ value: "Yiminghe", label: "yiminghe" },
										]}
										suffixIcon={<CaretDownOutlined />}
									/>
								</div>
							</div>
							<div className="flex items-center">
								<p className="w-[82px] whitespace-nowrap">Description</p>
								<div className="w-[calc(100%-82px)] pl-[16px]">
									<input type="text" className="cusInput" placeholder="BiMeow" />
								</div>
							</div>
						</div>

						<div className="c2 w-[25%] space-y-[10px] px-[8px] mb:w-full">
							<div className="mx-[-8px] flex">
								<div className="w-1/2 px-[8px]">
									<div className="bg-main w-full cursor-pointer rounded-[32px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
										<div className=" h-[23px] rounded-[30px] bg-[#14171C] px-[16px] py-[2px] text-center text-[14px] leading-[1.4] duration-300 hover:bg-purple">
											Select File
										</div>
									</div>
								</div>
								<div className="w-1/2 px-[8px]">
									<div className="bg-main w-full cursor-pointer rounded-[32px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
										<div className=" h-[23px] rounded-[30px] bg-[#14171C] px-[16px] py-[2px] text-center text-[14px] leading-[1.4] duration-300 hover:bg-purple">
											Add
										</div>
									</div>
								</div>
							</div>

							<p className="pl-[5px]">0 file selected</p>
						</div>
					</div>
				</div>
			</div>

			<style jsx global>
				{`
					.SectionAccountCheckFile {
						.pageNumber {
							margin-bottom: 20px;
						}

						.cusSelect {
							width: 100%;
							height: 23px;

							.ant-select-selection-item,
							.ant-select-selector {
								line-height: 1.2;
								border-radius: 32px;
							}

							.ant-select-selector {
								padding: 0 16px;
							}

							.ant-select-selection-item {
								z-index: 10;
							}

							.ant-select-selection-search-input {
								height: auto !important;
							}
						}
					}
				`}
			</style>
		</>
	);
}

export default memo(SectionAccountCheckFile);
