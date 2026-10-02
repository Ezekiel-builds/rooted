import { supabase } from '../supabaseClient';
import Header from '../components/Header';
import { useEffect, useState } from 'react';

function AdminDashboard() {
    const [members, setMembers] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    async function fetchMembers() {
        const { data, error } = await supabase
            .from('profiles')
            .select(`
                id,
                full_name,
                church_name,
                weekly_verse_checkins (verse_id, created_at),
                daily_reading_logs (reading_id, created_at)
            `)
            .order('created_at', { ascending: false });
         
            if(error) {
              /*   setErrorMessage(error.message); */
                console.log(error.message);
            } else {
                setMembers(data);
            }
    }

    useEffect(() => {
        fetchMembers();
    },[]);
    
    const membersWithCheckins = members.filter((member) => member.weekly_verse_checkins?.length > 0);
    const membersWithReadings = members.filter((member) => member.daily_reading_logs?.length > 0);
    const totalMembers = members.length;

    return (
        <>
            <Header />

            <div className="admin__dashboard-container">
                <div className="admin__dashboard-heading">
                    <p className="admin__church-name">
                        {members.length > 0 ? members[0].church_name : 'No Church Name'}
                    </p>

                    <h1 className="admin__name">
                        {members.length > 0 ? members[0].full_name : 'No Name'}
                    </h1>

                    <div className="admin__dashboard-subtitle">
                        <span className="admin__dashboard-subtitle-text">
                            Spiritual growth overview
                        </span>

                        <p className="admin__dashboard-date">
                            {new Date().toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                    </div>
                </div>

                <div className="admin__dasboard-stats">
                    <div className="admin__dashboard-stat">
                       <span className="admin__dashboard-stat-eyebrow">
                            VERSE CHECK-INS THIS WEEK

                       </span> 

                       <div className="admin__dashboard-stat-data">
                            <h4 className="admin__dashboard-stat-value">
                                    {membersWithCheckins.length}/{totalMembers}
                            </h4>

                            <span className="admin__dashboard-stat-label">
                                    { totalMembers > 0 ? Math.round((membersWithCheckins.length / totalMembers) * 100) : 0 }%
                            </span>
                       </div>    
                    </div>

                    <div className="admin__dashboard-stat">
                            <span className="admin__dshboard-stat-eyebrow">
                                READING CONSISTENCY THIS MONTH
                            </span>

                            <h4 className="admin__dashboard-stat-value">
                                { totalMembers > 0 ? Math.round((membersWithReadings.length / totalMembers) * 100) : 0 }%
                            </h4>
                    </div>
                    
                    <div className="admin__dashboard-stat">
                        <span className="admin__dashboard-stat-eyebrow">
                            TOTAL MEMBERS
                        </span>

                        <h4 className="admin__dashboard-stat-value">
                            {totalMembers}
                        </h4>
                    </div>
                </div>

                <div className="admin__chart-container">
                    // Chart or graph component would be placed here
                </div>

                <div className="admin__members">
                    <div className="admin__members-heading">
                        <h3 className="admin__members-title">
                            Ministry Members 
                        </h3>

                        <span className="admin__heading-subtitle">
                            Spiritual growth overview of members in the ministry
                        </span>
                    </div>

                    <div className="admin__members-topbar">
                        <span className="admin__members-topbar-label">
                            NAME
                        </span>

                        <span className="admin__members-topbar-label">
                            THIS WEEK'S VERSE
                        </span>

                        <span className="admin__members-topbar-label">
                            TODAY'S READING
                        </span>

                        <span className="admin__members-topbar-label">
                            LAST ACTIVE
                        </span>
                    </div>
]
                        {members.map((member) => {
                            return (
                                <div className="admin__member-row" key={member.id}>
                                    <p className="admin__member-name">
                                        {member.full_name}
                                    </p>

                                    <p className="admin__member-verse">
                                       {member.weekly_verse_checkins.length > 0 ? <i class="fi fi-rs-check"></i> : "——" }
                                    </p>

                                    <p className="admin__member-reading">
                                        {member.daily_reading_logs.length > 0 ? <i class="fi fi-rs-check"></i> : "——" }
                                    </p>

                                    <p className="admin__member-last-active">
                                        {member.weekly_verse_checkins.length > 0 ? new Date(member.weekly_verse_checkins[0].created_at).toLocaleDateString() : "——" }
                                    </p>
                                </div>
                            )
                        })}
                    
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;