import React from "react";
import { VscTwitter } from "react-icons/vsc";
function Footer() {
  return (
    <div className="container Footer">
      <footer className="py-5">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Fb2acb8fa-6443-46ee-86a2-273a39052de0%2FUntitled.png?table=block&id=bd3796d2-fdcc-4ac9-a332-df1afcae5f67&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=2000&userId=&cache=v2"
            className="h-8 me-3 rounded-full"
            alt="FlowBite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Uranus Web
          </span>
        </a>
        <div className="row footer-part1 ">
          <div className="col-6 col-md-2 mb-3">
            <h2>Partners</h2>
            <ul>
              <li>
                <a href="https://dia.wiki/">
                  Decentralized Intelligence Agency
                </a>
              </li>
              <li>
                <a href="https://worldvibeweb.org/">World Vibe Web</a>
              </li>
              <li>
                <a href="https://www.purplerock.xyz/">Purplerock</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h2>Resources:</h2>
            <ul>
              <li>
                <a href="https://persistventure.notion.site/URANUS-Web-7291c569928947758d04c7dc99a3a327">
                  Effective Vibes
                </a>
              </li>
              <li>
                <a href="https://goldenmeme.org/">Golden Memes</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top footer-part2">
          <p>© 2024 Uranus Web™, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="">
              <a className="" href="#">
              <img src="./public/twitter.png" alt=""  className="icons"/>
              </a>
            </li>
            <li className="">
              <a className="" href="#">
              <img src="./public/instagram.png" alt=""  className="icons"/>
              </a>
            </li>

            <li className="">
              <a className="" href="#">
              <img src="./public/facebook.png" alt=""  className="icons "/>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
