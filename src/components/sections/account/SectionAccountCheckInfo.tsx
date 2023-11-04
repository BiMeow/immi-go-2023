import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import { Select } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

function SectionAccountCheckInfo({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionAccountCheckInfo mt-[30px]`}>
				<div className="pageNumber">
					<h3 className="bg-main mb-[16px !bg-clip-text font-Bebas text-[32px] font-medium text-transparent">
						Page 3
					</h3>
					<div className="space-y-[10px]">
						<p className="font-bold">Applicant</p>
						<div className="flex items-center space-x-[16px] mb:flex-col mb:items-start mb:space-x-0 mb:space-y-[5px]">
							<p className="whitespace-nowrap mb:whitespace-normal">Passport number</p>
							<input type="text" className="cusInput max-w-[300px]" placeholder="BiMeow" />
						</div>
						<div className="flex items-center space-x-[16px] mb:flex-col mb:items-start mb:space-x-0 mb:space-y-[5px]">
							<p className="whitespace-nowrap mb:whitespace-normal">Country of passport</p>
							<Select
								className="cusSelect max-w-[300px]"
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
						<div className="flex items-center space-x-[16px] mb:flex-col mb:items-start mb:space-x-0 mb:space-y-[5px]">
							<p className="whitespace-nowrap mb:whitespace-normal">Nationality of passport holder</p>
							<Select
								className="cusSelect max-w-[300px]"
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

				<div className="pageNumber">
					<h3 className="bg-main mb-[16px !bg-clip-text font-Bebas text-[32px] font-medium text-transparent">
						Page 6
					</h3>
					<div className="space-y-[10px]">
						<p className="font-bold">Additional identity questions</p>
						<div className="flex items-center space-x-[16px] mb:flex-col mb:items-start mb:space-x-0 mb:space-y-[5px]">
							<p className="whitespace-nowrap mb:whitespace-normal">
								Provide further details below, where available.
							</p>
						</div>
						<div className="flex items-center space-x-[16px] mb:flex-col mb:items-start mb:space-x-0 mb:space-y-[5px]">
							<p className="whitespace-nowrap mb:whitespace-normal">
								Has this applicant previously travelled to Australia or previously applied for a visa?
							</p>
							<Select
								className="cusSelect max-w-[300px]"
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
			</div>

			<style jsx global>
				{`
					.SectionAccountCheckInfo {
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

export default memo(SectionAccountCheckInfo);
