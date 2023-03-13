import React, { useState, useEffect } from "react";
import styles from "./UserList.module.scss";
import personOne from "../../assets/png/person1.png";
import personTwo from "../../assets/png/person2.png";
import personThree from "../../assets/png/person3.png";
import addIcon from "../../assets/png/addIcon.png";
import optionIcon from "../../assets/png/menuIcon.png";

export default function Expenses() {
  const [state, setState] = useState([]);
  const [error, setError] = useState({});

  interface IUser {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
  }

  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((response) => response.json())
      .then((res) => setState(res.slice(0, 10)))
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <main className={styles.UserList}>
        <div className={styles.UserListCard}>
          <section className={styles.UserListOverview}>
            <div className={styles.UserListHeader}>
              <p className={styles.UserListTitle}>USERS</p>
              <div className={styles.UserListAction}>
                <div className={styles.personImages}>
                  <img
                    className={styles.personOne}
                    src={personOne}
                    alt="person one"
                  />
                  <img
                    className={styles.personTwo}
                    src={personTwo}
                    alt="person two"
                  />
                  <img
                    className={styles.personThree}
                    src={personThree}
                    alt="person three"
                  />
                </div>
                <button>
                  <img className={styles.addIcon} src={addIcon} alt="add" />
                </button>
              </div>
            </div>
            <p className={styles.dateRange}>01 - 25 March, 2023</p>

            <div className={styles.UserListOverviewHeader}>
              <p className={styles.UserListOverviewTitle}>People List</p>
              <button>
                <img
                  className={styles.UserListOption}
                  src={optionIcon}
                  alt="options"
                />
              </button>
            </div>
            <ul>
              {state.map((state: IUser) => (
                <li className={styles.UserListItem} key={state.id}>
                  <div className={styles.UserListItemLeft}>
                    <div className={styles.UserListItemDev}>
                      <img
                        className={styles.personThree}
                        src={personThree}
                        alt="person three"
                      />
                    </div>
                    <div className={styles.UserListItemDetails}>
                      <p className={styles.UserListItemTitle}>{state.name}</p>
                      <p className={styles.UserListItemTime}>{state.gender}</p>
                      <p className={styles.UserListItemTime}>{state.email}</p>
                      <p className={styles.UserListItemTime}>{state.status}</p>
                    </div>
                  </div>
                  <p className={styles.UserListItemPrice}>{state.id}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
