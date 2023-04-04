import { ContentCopyOutlined } from '@mui/icons-material';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import Peer, { DataConnection } from 'peerjs';
import {
  Reducer,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

interface MessageAction {
  type: 'ADD';
  payload: string;
}

interface MessagesState {
  messages: string[];
}

const messagesInitialState: MessagesState = { messages: [] };

const messagesReducer: Reducer<MessagesState, MessageAction> = (
  state,
  action,
) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, messages: [...state.messages, action.payload] };
  }
};

export const HostPage: React.FC = () => {
  const recipientRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLInputElement | null>(null);
  const [connection, setConnection] = useState<DataConnection | null>(null);
  const [messagesState, dispatch] = useReducer(
    messagesReducer,
    messagesInitialState,
  );
  let { nickname } = useParams<string>();
  const [id, setId] = useState('');
  const peer = useMemo(() => new Peer(), []);

  const connect = () => {
    if (peer && recipientRef.current) {
      const newConnection = peer.connect(recipientRef.current.value);
      setConnection(newConnection);
    }
  };

  const sendMessage = () => {
    if (connection && messageRef.current) {
      connection.send(messageRef.current.value);
    }
  };

  useEffect(() => {
    console.log(peer);
    if (peer) {
      peer.on('open', (newId) => {
        setId(newId);
      });
      peer.on('connection', (newConnection) => {
        setConnection(newConnection);
      });
    }
  }, [peer]);

  useEffect(() => {
    if (connection) {
      connection.on('data', (data) => {
        dispatch({ type: 'ADD', payload: data as string });
      });
    }
  }, [connection]);

  return (
    <HostPageWrapper>
      <YourId id={id} />
      <TextField
        inputRef={recipientRef}
        variant="outlined"
        label="Recipient nickname"
      ></TextField>
      <Button onClick={connect} variant="contained" type="submit">
        Connect
      </Button>
      <TextField
        inputRef={messageRef}
        variant="outlined"
        label="Enter a message"
      ></TextField>
      <Button onClick={sendMessage} variant="contained" type="submit">
        Send
      </Button>
      <div>
        {messagesState.messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </HostPageWrapper>
  );
};

const HostPageWrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
`;

const YourIdContainer = styled.div`
  display: grid;
  grid-template:
    'yourIdLabel .' min-content
    'idContainer copyButton' min-content
    / auto 1fr;
  justify-items: start;
  align-items: center;

  .yourIdLabel {
    grid-area: yourIdLabel;
  }
  .idContainer {
    grid-area: idContainer;
  }
  .copyButton {
    grid-area: copyButton;
  }
`;
const YourId: React.FC<{ id: string }> = ({ id }) => {
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(id);
  };
  return (
    <YourIdContainer>
      <Typography className="yourIdLabel" paragraph={false} align="center">
        Your ID:
      </Typography>
      <Typography className="idContainer" paragraph={false}>
        {id}
      </Typography>
      <IconButton
        className="copyButton"
        color="primary"
        onClick={() => copyToClipBoard()}
      >
        <ContentCopyOutlined />
      </IconButton>
    </YourIdContainer>
  );
};
