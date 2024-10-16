import { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import CustomIcon from "../components/Icons.jsx";
import "../styles/pages/main.scss";
import { getPosts } from "../services/endpoints";
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
  Button,
} from "semantic-ui-react";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleTogglePage = (item) => {
    navigate("/comment", {
      state: {
        selectedData: item,
      },
    });
  };

  const fetchDataPost = async () => {
    try {
      const response = await getPosts();

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
    fetchDataPost();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <>
          <Topbar />
          <div className="container-table">
            <div className="container-btn">
              <Button primary onClick={() => handleTogglePage()}>TODOS COMENTÁRIOS</Button>
            </div>
            <Table singleLine size="small">
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Id</TableHeaderCell>
                  <TableHeaderCell>Id Usuário</TableHeaderCell>
                  <TableHeaderCell>Título</TableHeaderCell>
                  <TableHeaderCell>Corpo</TableHeaderCell>
                  <TableHeaderCell>Ação</TableHeaderCell>
                </TableRow>
              </TableHeader>

              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={item.id || index}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.userId}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.body}</TableCell>
                    <TableCell>
                      <EditIcon
                        sx={{
                          width: "0.75em",
                          height: "0.75em",
                          cursor: "pointer",
                        }}
                        onClick={() => handleTogglePage(item)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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

export default Main;
