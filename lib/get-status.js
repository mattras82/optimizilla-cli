"use strict";

import axios from "axios";

function getStatus(command, { uniqPathId, randomId, fileName }) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `http://optimizilla.com/${command}/${uniqPathId}/${randomId}?rnd=${Math.random()}`
      )
      .then((response) => {
        let parsedBody = response.data;
        try {
          parsedBody = JSON.parse(body);
        } catch (err) {}

        if (response && response.status === 200) {
          resolve({
            body: parsedBody,
            uniqPathId,
            randomId,
            fileName,
          });
        } else {
          reject({
            body: parsedBody,
            uniqPathId,
            randomId,
            fileName,
          });
        }
      })
      .catch((error) => {
        reject({
          error,
          uniqPathId,
          randomId,
          fileName,
        });
      });
  });
}

export default getStatus;
