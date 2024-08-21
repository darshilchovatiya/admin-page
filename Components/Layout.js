import { Icon } from "@iconify/react";
import React from "react";
import { Badge } from "reactstrap";

export default function Layout() {
  return (
    <div className="main-content app-content">
      <div className="container-fluid">
        <div className="app-header">
          <div className="content-left">
            <div>
              <h1 className="tables"> Tables</h1>
            </div>
            <div>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0);">Tables</a>
                  </li>
                  <li aria-current="page" className="breadcrumb-item active">
                    Tables
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="btn-list">
            <button className="btn btn-primary-light btn-wave me-2">
              <Icon icon="mdi:crown-outline" height={20} width={20} />
              <i className="bx bx-crown align-middle"></i>
              Plan Upgrade{" "}
            </button>
            <button className="btn btn-secondary-light btn-wave me-0">
              <Icon icon="line-md:cloud-up" height={20} width={20} />
              <i className="ri-upload-cloud-line align-middle"></i> Export
              Report{" "}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="card custom-card custom-component">
              <div className="card-header justify-content-between">
                <div className="card-title">Basic Tables</div>
                <div className="prism-toggle">
                  <button className="btn btn-sm btn-primary-light">
                    Show Code
                    <i className="align-middle d-inline-block ms-2 ri-code-line"></i>
                    <Icon icon="uil:arrow" />
                  </button>
                </div>
              </div>
              <hr />
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table text-nowrap">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Created On</th>
                        <th scope="col">Number</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mark</td>
                        <td>21,Dec 2021</td>
                        <td>+1234-12340</td>
                        <td>
                          <span className="badge bg-outline-primary">
                            Completed
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Monika</td>
                        <td>29,April 2023</td>
                        <td>+1523-12459</td>
                        <td>
                          <span className="badge bg-outline-warning">
                            Failed
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Madina</td>
                        <td>30,Nov 2023</td>
                        <td>+1982-16234</td>
                        <td>
                          <span className="badge bg-outline-success">
                            Successful
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Bhamako</td>
                        <td>18,Mar 2023</td>
                        <td>+1526-10729</td>
                        <td>
                          <span className="badge bg-outline-secondary">
                            Pending
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="card custom-card custom-component">
              <div className="card-header justify-content-between">
                <div className="card-title">Bordard Tables</div>
                <div className="prism-toggle">
                  <button className="btn btn-sm btn-primary-light">
                    Show Code
                    <i className="align-middle d-inline-block ms-2 ri-code-line"></i>
                    <Icon icon="uil:arrow" />
                  </button>
                </div>
              </div>
              <hr />
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table text-nowrap table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">User</th>
                        <th scope="col">Status</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-xs me-2 online avatar-rounded">
                              <img src="/td1.jpeg" alt="img" />
                            </span>
                            Sukuro Kim
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success-transparent">
                            Active
                          </span>
                        </td>
                        <td>kimosukurogmail.com</td>
                        <td>
                          <div className="hstack gap-2 flex-wrap">
                            <a
                              href="javascript:void(0);"
                              class="text-info fs-14 lh-1"
                            >
                              <Icon icon="iconamoon:edit-light" />
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="text-danger fs-14 lh-1"
                            >
                              <Icon icon="material-symbols:delete-outline" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-xs me-2 offline avatar-rounded">
                              <img
                                src="/td2.png"
                                alt="img"
                                height={20}
                                width={20}
                              />
                            </span>
                            Hasimna
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-light text-dark">
                            Inactive
                          </span>
                        </td>
                        <td>hasimna2132 gmail.com</td>
                        <td>
                          <div className="hstack gap-2 flex-wrap">
                            <a
                              href="javascript:void(0);"
                              className="text-info fs-14 lh-1"
                            >
                              <Icon icon="iconamoon:edit-light" />{" "}
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="text-danger fs-14 lh-1"
                            >
                              <Icon icon="material-symbols:delete-outline" />{" "}
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-xs me-2 online avatar-rounded">
                              <img src="/td3.png" alt="img" />
                            </span>
                            Azimo Khan
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success-transparent">
                            Active
                          </span>
                        </td>
                        <td>azimokhan421 gmail.com</td>
                        <td>
                          <div className="hstack gap-2 flex-wrap">
                            <a
                              href="javascript:void(0);"
                              className="text-info fs-14 lh-1"
                            >
                              <Icon icon="iconamoon:edit-light" />{" "}
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="text-danger fs-14 lh-1"
                            >
                              <Icon icon="material-symbols:delete-outline" />{" "}
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-xs me-2 online avatar-rounded">
                              <img src="/td4.png" alt="img" />
                            </span>
                            Samantha Julia
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success-transparent">
                            Active
                          </span>
                        </td>
                        <td>julianasams143 gmail.com</td>
                        <td>
                          <div className="hstack gap-2 flex-wrap">
                            <a
                              href="javascript:void(0);"
                              className="text-info fs-14 lh-1"
                            >
                              <Icon icon="iconamoon:edit-light" />{" "}
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="text-danger fs-14 lh-1"
                            >
                              <Icon icon="material-symbols:delete-outline" />{" "}
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4">
            <div className="card custom-card custom-component">
              <div className="card-header justify-content-between">
                <div className="card-title">Borderd Primary</div>
                <div className="prism-toggle">
                  <button className="btn btn-sm btn-primary-light">
                    Show Code
                    <Icon icon="uil:arrow" />
                  </button>
                </div>
              </div>
              <hr />
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table text-nowrap table-bordered border-primary">
                    <thead>
                      <tr>
                        <th scope="col">Order</th>
                        <th scope="col">Date</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">#0007</td>
                        <td>
                          <span className="badge bg-light text-dark">
                            26-04-2022
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-xs me-2 online avatar-rounded">
                              <img src="/td1.jpeg" alt="img" />
                            </span>
                            Mayor Kelly
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-primary-transparent">
                            Booked
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">#0008</td>
                        <td>
                          <span className="badge bg-light text-dark">
                            15-02-2022
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-xs me-2 online avatar-rounded">
                              <img src="/td3.png" alt="img" />
                            </span>
                            Wicky Kross
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-primary-transparent">
                            Booked
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">#0009</td>
                        <td>
                          <span className="badge bg-light text-dark">
                            23-05-2022
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                              <img src="/td2.png" alt="img" />
                            </span>
                            Julia Cam
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-primary-transparent">
                            Booked
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card custom-card custom-component">
              <div className="card-header justify-content-between">
                <div className="card-title">Borderd success</div>
                <div className="prism-toggle">
                  <button className="btn btn-sm btn-primary-light">
                    Show Code
                    <Icon icon="uil:arrow" />
                  </button>
                </div>
              </div>
              <hr />
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table text-nowrap table-bordered border-primary">
                    <thead>
                      <tr>
                        <th scope="col">Order</th>
                        <th scope="col">Date</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">#0011</td>
                        <td>
                          <span className="badge bg-light text-dark">
                            07-01-2022
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                              <img src="/td3.png" alt="img" />
                            </span>
                            Helsenky
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success-transparent">
                            Delivered
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">#0012</td>
                        <td>
                          <span className="badge bg-light text-dark">
                            18-05-2022
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-xs me-2 online avatar-rounded">
                              <img src="/td4.png" alt="img" />
                            </span>
                            Brodus
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success-transparent">
                            Delivered
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">#0013</td>
                        <td>
                          <span className="badge bg-light text-dark">
                            19-03-2022
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-xs me-2 online avatar-rounded">
                              <img src="/td1.jpeg" alt="img" />
                            </span>
                            Chikka Alen
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success-transparent">
                            Delivered
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card custom-card custom-component">
              <div className="card-header justify-content-between">
                <div className="card-title">Borderd warning</div>
                <div className="prism-toggle">
                  <button className="btn btn-sm btn-primary-light">
                    Show Code
                    <Icon icon="uil:arrow" />
                  </button>
                </div>
              </div>
              <hr />
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table text-nowrap table-bordered border-primary">
                    <thead>
                      <tr>
                        <th scope="col">Order</th>
                        <th scope="col">Date</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">#0014</td>
                        <td>
                          <span className="badge bg-light text-dark">
                            21-02-2022
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-xs me-2 online avatar-rounded">
                              <img src="/td2.png" alt="img" />
                            </span>
                            Sukuro Kim
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-warning-transparent">
                            Accepted
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">#0018</td>
                        <td>
                          <span className="badge bg-light text-dark">
                            26-03-2022
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-xs me-2 online avatar-rounded">
                              <img src="/td1.jpeg" alt="img" />
                            </span>
                            Alex Carey
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-warning-transparent">
                            Accepted
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">#0020</td>
                        <td>
                          <span className="badge bg-light text-dark">
                            14-03-2022
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-xs me-2 online avatar-rounded">
                              <img src="/td4.png" alt="img" />
                            </span>
                            Pamila Anderson
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-warning-transparent">
                            Accepted
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
