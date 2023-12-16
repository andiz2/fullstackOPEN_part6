// src/components/AnecdoteList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteAnec } from '../reducers/anecdoteReducer';
import { notificationShow, notificationHide } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter.length <= 0) {
      return state.anecdotes;
    }
    return state.anecdotes.filter((el) =>
      el.content.toLowerCase().includes(state.filter.toLowerCase())
    );
  });
  const dispatch = useDispatch();

  // Anecdote component created inside AnecdoteList
  const Anecdote = ({ anecdote }) => (
    <div>
      {anecdote.content} <br />
      has {anecdote.votes}
      <button onClick={() => handleVote(anecdote)}> vote </button>
    </div>
  );

  const handleVote = (anecdote) => {
    dispatch(voteAnec(anecdote.id));

    // Display notification for 5 seconds
    dispatch(notificationShow(`You voted for "${anecdote.content}"`));

    // Automatically remove the notification after 5 seconds
    setTimeout(() => {
      dispatch(notificationHide());
    }, 5000);
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
        .slice()
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote key={anecdote.id} anecdote={anecdote} />
        ))}
    </div>
  );
};

export default AnecdoteList;
