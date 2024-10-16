import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCommets } from "../services/endpoints";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Segment,
  Loader,
  Dimmer,
} from "semantic-ui-react";
import Topbar from "../components/Topbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "../styles/pages/comment.scss";
const Comment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedData, setSelectedData] = useState(state?.selectedData);
  const [data, setData] = useState([]);

  const handleTogglePage = () => {
    navigate("/");
  };

  const fetchCommetsById = async (id) => {
    try {
      const response = await getCommets(id);

      if (response) {
        setTimeout(() => {
          setData(response);
        }, 1500);
      } else {
        setData([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCommetsById(selectedData ? selectedData.id : null);
  }, [selectedData]);

  return (
    <>
      {data.length > 0 ? (
        <>
          <Topbar />

          <div className="container-comments">
            <h3 className="title">
              {selectedData
                ? `Comentários do post ${selectedData.id}`
                : "Todos comentários"}{" "}
            </h3>
            <ArrowBackIcon
              sx={{
                width: "0.75em",
                height: "0.75em",
                cursor: "pointer",
              }}
              onClick={() => handleTogglePage()}
            />
            <div className="container-table-comment">
              <Table singleLine size="small">
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Id Post</TableHeaderCell>
                    <TableHeaderCell>Id</TableHeaderCell>
                    <TableHeaderCell>Nome</TableHeaderCell>
                    <TableHeaderCell>E-mail</TableHeaderCell>
                    <TableHeaderCell>Corpo</TableHeaderCell>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {data.map((item, index) => (
                    <TableRow key={item.id || index}>
                      <TableCell>{item.postId}</TableCell>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.body}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </>
      ) : (
        <Segment>
          <Dimmer active inverted>
            <Loader active inverted />
          </Dimmer>
        </Segment>
      )}
    </>
  );
};

export default Comment;
