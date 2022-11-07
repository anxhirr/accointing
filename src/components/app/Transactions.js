import React from "react";
import { PAiOutlineSearch } from "react-icons";
import styles from "./Transactions.module.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

function Transactions() {
  return (
    <div className="transactions-container">
      <div className={styles.content}>
        <div>
          <div>
            <Link>New</Link>
            <Link>Duplicate</Link>
            <Link>Delete</Link>
            <Link>Classify</Link>
            <Link>Clear Filters</Link>
            <Link>Export full History</Link>
          </div>
          <div>
            <input />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <span>
                  <input type="checkbox"></input>
                </span>
              </th>
              <th>
                <select>
                  <option>date</option>
                  <option>year</option>
                </select>
              </th>
              <th>
                <select>
                  <option>Type</option>
                  <option>Deposit</option>
                  <option>Withdraw</option>
                  <option>Order</option>
                </select>
              </th>
              <th>
                <div>
                  <AiOutlineSearch />
                  <input></input>
                </div>
              </th>
              <th>
                <select>
                  <option>all wallets</option>
                </select>
              </th>
              <th>
                <div>
                  <AiOutlineSearch />
                  <input></input>
                </div>
              </th>
              <th>
                <select>
                  <option>any classification</option>
                  <option>classified</option>
                  <option>missing classification</option>
                </select>
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>No transactions</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
